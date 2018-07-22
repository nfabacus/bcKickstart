import React, { Component } from 'react';
import { Form, Input, Button, Message } from 'semantic-ui-react';
import Campaign from '../../../ethereum/campaign';
import web3 from '../../../ethereum/web3';
import { Link, Router } from '../../../routes';
import Layout from '../../../components/Layout';

class RequestNew extends Component {
  state = {
    value: '',
    description: '',
    recipient: '',
    loading: false,
    errorMessage: ''
  }

  static async getIntialProps(props) {
    const { address } = props.query;

    return { address };
  }

  onSubmit = async e => {
    e.preventDefault();
    const { address } = this.props.url.query;
    const campaign = Campaign(address);
    const { description, value, recipient } = this.state;
    
    this.setState({ loading: true, errorMessage: '' });

    try {
      const accounts = await web3.eth.getAccounts();
      await campaign.methods.createRequest(
        description,
        web3.utils.toWei(value, 'ether'),
        recipient
      ).send({ from: accounts[0] });

      Router.pushRoute(`/campaigns/${address}/requests`);
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }

    this.setState({ loading: false })
  }

  render() {
    return (
      <Layout>
      <h1>Create a Request</h1>
      <p style={{ color: "red" }}>*** Only Campaign Creator can make a request. ***</p>
        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
          <Form.Field>
            <label>Description</label>
            <Input
              value={this.state.description}
              onChange={e => this.setState({ description: e.target.value })}
            />
          </Form.Field>

          <Form.Field>
            <label>Value in Ether</label>
            <Input
              value={this.state.value}
              onChange={e => this.setState({ value: e.target.value })}
            />
          </Form.Field>

          <Form.Field>
            <label>Recipient (must be a valid ethereum address)</label>
            <Input
              value={this.state.recipient}
              onChange={e => this.setState({ recipient: e.target.value })}
            />
          </Form.Field>
          
          <Message error header="Oops!" content={this.state.errorMessage} />
          <Button
            loading={this.state.loading}
            primary
            type="submit"
          >
            Create!
          </Button>
        </Form>
      </Layout>
    );
  }
}

export default RequestNew;