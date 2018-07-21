import React, { Component } from 'react';
import { Form, Button, Input, Message } from 'semantic-ui-react';
import Layout from '../../components/Layout';
import factory from '../../ethereum/factory';
import web3 from '../../ethereum/web3';

class CampaignNew extends Component {
  state={
    minimumContribution: ''
  };

  onSubmit = async (e) => {
    e.preventDefault();

    try {
      const accounts = await web3.eth.getAccounts();
      await factory.methods
        .createCampaign(this.state.minimumContribution)
        .send({
          from: accounts[0]
        });
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }
    
  }

  render () {
    return (
      <Layout>
        <h1>Create a Campaign!</h1>

        <Form onSubmit={ this.onSubmit } error={!!this.state.errorMessage}>
          <Form.Field>
            <label>Minimum Contribution</label>
            <Input
              label='wei'
              labelPosition='right'
              value={this.state.minimumContribution}
              onChange={ e => this.setState({ minimumContribution: e.target.value }) }
            />
          </Form.Field>

          <Message error header="Oops!" content={this.state.errorMessage} />
          <Button primary type="submit">Create!</Button>
        </Form>
      </Layout>
    );
  }
}

export default CampaignNew;