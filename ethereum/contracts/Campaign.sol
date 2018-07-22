pragma solidity ^0.4.17;

contract CampaignFactory {
    address[] public deployedCampaigns;
    
    function createCampaign(uint minimum) public {
        address newCampaign = new Campaign(minimum, msg.sender);
        deployedCampaigns.push(newCampaign);
    }
    
    function getDeployedCampaigns() public view returns (address[]) {
        return deployedCampaigns;
    }
}

contract Campaign {
    struct Request {
        string description;
        uint value;
        address recipient;
        bool complete;
        uint approvalCount;
        mapping(address => bool) approvals;
    } //struct is a type/definition, NOT an instance
    
    Request[] public requests; //here define requests as an array of type 'Request' defined in above struct.
    address public manager;
    uint public minimumContribution;
    mapping(address => bool) public approvers;
    uint public approversCount;  //to keep track the number of approvers
    
    modifier restricted() { //modifer can place a common/shared code within functions.
        require(msg.sender == manager); //make only manager can access this function.
        _;
    }
    
    constructor (uint minimum, address creator) public {
        manager = creator; //msg is a global variable. msg.sender is the person who creates this contract.
        minimumContribution = minimum;
    }
    
    function contribute() public payable {
        require(msg.value > minimumContribution);
        require(approvers[msg.sender] != true);
        approvers[msg.sender]= true;
        approversCount++;
    }
    
    function createRequest(string description, uint value, address recipient) 
        public restricted {
            Request memory newRequest = Request({  //here create an instance of Request struct, and assign it to newRequest of type Request. 'memory' to match the memory data assigning.
               description: description,
               value: value,
               recipient: recipient,
               complete: false,
               approvalCount: 0   
               //mapping ('approvals') is a reference type, so not required to add in here. 
            });
            
            requests.push(newRequest);
    }
    
    function approveRequest(uint index) public {
        Request storage request = requests[index]; //call requests[index] 'request' but keep the original as storage data (not creating a memory copy). 
        
        require(approvers[msg.sender]);
        require(!request.approvals[msg.sender]);
        
        request.approvals[msg.sender] = true;
        request.approvalCount++;
    }
    
    function finalizeRequest(uint index) public restricted {
        Request storage request = requests[index];
        
        require(request.approvalCount > (approversCount / 2));
        require(!request.complete);
        
        request.recipient.transfer(request.value); 
        //because recipient data type is address, it has method called transfer
        
        request.complete = true;
    }

    function getSummary() public view returns (
        uint, uint, uint, uint, address
    ) {
        return (
            minimumContribution,
            address(this).balance,
            requests.length,
            approversCount,
            manager
        );
    }

    function getRequestsCount() public view returns (uint) {
        return requests.length;
    }
}