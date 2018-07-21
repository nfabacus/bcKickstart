import React, { Component } from 'react';
import factory from '../ethereum/factory';

class CampaignIndex extends Component {
  async componentDidMount() {
    console.log('factory>>>', factory.methods);
    const campaigns = await factory.methods.getDeployedCampaigns().call();
    console.log('test>>', campaigns);
  }
  render() {
    return <div>Campaigns Index</div>
  }
}

export default CampaignIndex;