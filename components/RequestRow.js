import React, { Component } from 'react';
import { Table, Button } from 'semantic-ui-react';
import web3 from '../ethereum/web3';
import Campaign from '../ethereum/campaign';
import { Router } from '../routes';

class RequestRow extends Component {
  onApprove = async () => {
    const { id, address } = this.props;
    const accounts = await web3.eth.getAccounts();
    const campaign = Campaign(address);
    await campaign.methods.approveRequest(id).send({
      from: accounts[0]
    });

    Router.replaceRoute(`/campaigns/${address}/requests`);
  }

  finalize = async () => {
    const { id, address } = this.props;
    const accounts = await web3.eth.getAccounts();
    const campaign = Campaign(address);
    await campaign.methods.finalizeRequest(id).send({
      from: accounts[0]
    });

    Router.replaceRoute(`/campaigns/${address}/requests`);
  }

  render() {
    const { Row, Cell } = Table;
    const { id, request, approversCount } = this.props;
    const readyToFinalize = request.approvalCount > (approversCount / 2);
    return (
      <Row
        disabled={request.complete}
        positive={ readyToFinalize && !request.complete }
      >
        <Cell>{ id }</Cell>
        <Cell>{request.description}</Cell>
        <Cell>{web3.utils.fromWei(request.value, 'ether')}</Cell>
        <Cell>{request.recipient}</Cell>
        <Cell>{request.approvalCount}/{approversCount}</Cell>
        <Cell>
        { request.complete || readyToFinalize ? null :
          (
            <Button
              color="green"
              basic
              onClick={this.onApprove}
            >
              Approve
            </Button>
          )
        }
        </Cell>
        <Cell>
          { request.complete ? null :
            (
              <Button
                color='teal'
                basic
                onClick={this.finalize}
              >
                Finalise
              </Button>
            )
          }
        </Cell>
      </Row>
    );
  }
}

export default RequestRow;