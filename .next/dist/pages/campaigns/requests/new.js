'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _campaign = require('../../../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _web = require('../../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../../../routes');

var _Layout = require('../../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/nobuyukifujioka/Documents/noby-coding/bcKickstart/pages/campaigns/requests/new.js?entry';


var RequestNew = function (_Component) {
  (0, _inherits3.default)(RequestNew, _Component);

  function RequestNew() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, RequestNew);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RequestNew.__proto__ || (0, _getPrototypeOf2.default)(RequestNew)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      value: '',
      description: '',
      recipient: '',
      loading: false,
      errorMessage: ''
    }, _this.onSubmit = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(e) {
        var address, campaign, _this$state, description, value, recipient, accounts;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                e.preventDefault();
                address = _this.props.url.query.address;
                campaign = (0, _campaign2.default)(address);
                _this$state = _this.state, description = _this$state.description, value = _this$state.value, recipient = _this$state.recipient;

                _this.setState({ loading: true, errorMessage: '' });

                _context.prev = 5;
                _context.next = 8;
                return _web2.default.eth.getAccounts();

              case 8:
                accounts = _context.sent;
                _context.next = 11;
                return campaign.methods.createRequest(description, _web2.default.utils.toWei(value, 'ether'), recipient).send({ from: accounts[0] });

              case 11:

                _routes.Router.pushRoute('/campaigns/' + address + '/requests');
                _context.next = 17;
                break;

              case 14:
                _context.prev = 14;
                _context.t0 = _context['catch'](5);

                _this.setState({ errorMessage: _context.t0.message });

              case 17:

                _this.setState({ loading: false });

              case 18:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2, [[5, 14]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(RequestNew, [{
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, _react2.default.createElement('h1', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, 'Create a Request'), _react2.default.createElement('p', { style: { color: "red" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, '*** Only Campaign Creator can make a request. ***'), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, 'Description'), _react2.default.createElement(_semanticUiReact.Input, {
        value: this.state.description,
        onChange: function onChange(e) {
          return _this3.setState({ description: e.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      })), _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, 'Value in Ether'), _react2.default.createElement(_semanticUiReact.Input, {
        value: this.state.value,
        onChange: function onChange(e) {
          return _this3.setState({ value: e.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      })), _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, 'Recipient (must be a valid ethereum address)'), _react2.default.createElement(_semanticUiReact.Input, {
        value: this.state.recipient,
        onChange: function onChange(e) {
          return _this3.setState({ recipient: e.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Oops!', content: this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }), _react2.default.createElement(_semanticUiReact.Button, {
        loading: this.state.loading,
        primary: true,
        type: 'submit',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, 'Create!')));
    }
  }], [{
    key: 'getIntialProps',
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(props) {
        var address;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                address = props.query.address;
                return _context2.abrupt('return', { address: address });

              case 2:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getIntialProps(_x2) {
        return _ref3.apply(this, arguments);
      }

      return getIntialProps;
    }()
  }]);

  return RequestNew;
}(_react.Component);

exports.default = RequestNew;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9yZXF1ZXN0cy9uZXcuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJGb3JtIiwiSW5wdXQiLCJCdXR0b24iLCJNZXNzYWdlIiwiQ2FtcGFpZ24iLCJ3ZWIzIiwiTGluayIsIlJvdXRlciIsIkxheW91dCIsIlJlcXVlc3ROZXciLCJzdGF0ZSIsInZhbHVlIiwiZGVzY3JpcHRpb24iLCJyZWNpcGllbnQiLCJsb2FkaW5nIiwiZXJyb3JNZXNzYWdlIiwib25TdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJhZGRyZXNzIiwicHJvcHMiLCJ1cmwiLCJxdWVyeSIsImNhbXBhaWduIiwic2V0U3RhdGUiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwibWV0aG9kcyIsImNyZWF0ZVJlcXVlc3QiLCJ1dGlscyIsInRvV2VpIiwic2VuZCIsImZyb20iLCJwdXNoUm91dGUiLCJtZXNzYWdlIiwiY29sb3IiLCJ0YXJnZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUyxBQUFNLEFBQU8sQUFBUTs7QUFDOUIsQUFBTyxBQUFjOzs7O0FBQ3JCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFTLEFBQU0sQUFBYzs7QUFDN0IsQUFBTyxBQUFZOzs7Ozs7Ozs7SSxBQUViOzs7Ozs7Ozs7Ozs7Ozs7b05BQ0osQTthQUFRLEFBQ0MsQUFDUDttQkFGTSxBQUVPLEFBQ2I7aUJBSE0sQUFHSyxBQUNYO2VBSk0sQUFJRyxBQUNUO29CLEFBTE0sQUFLUTtBQUxSLEFBQ04sYUFhRixBOzJGQUFXLGlCQUFBLEFBQU0sR0FBTjsyRUFBQTs7c0VBQUE7b0JBQUE7NkNBQUE7bUJBQ1Q7a0JBQUEsQUFBRSxBQUNNO0FBRkMsMEJBRVcsTUFBQSxBQUFLLE1BQUwsQUFBVyxJQUZ0QixBQUUwQixNQUYxQixBQUVELEFBQ0Y7QUFIRywyQkFHUSx3QkFIUixBQUdRLEFBQVM7OEJBQ2dCLE1BSmpDLEFBSXNDLE9BSnRDLEFBSUQsMEJBSkMsQUFJRCxhQUpDLEFBSVksb0JBSlosQUFJWSxPQUpaLEFBSW1CLHdCQUpuQixBQUltQixBQUU1Qjs7c0JBQUEsQUFBSyxTQUFTLEVBQUUsU0FBRixBQUFXLE1BQU0sY0FOdEIsQUFNVCxBQUFjLEFBQStCOztnQ0FOcEM7Z0NBQUE7dUJBU2dCLGNBQUEsQUFBSyxJQVRyQixBQVNnQixBQUFTOzttQkFBMUI7QUFUQyxvQ0FBQTtnQ0FBQTt1QkFVRCxTQUFBLEFBQVMsUUFBVCxBQUFpQixjQUFqQixBQUNKLGFBQ0EsY0FBQSxBQUFLLE1BQUwsQUFBVyxNQUFYLEFBQWlCLE9BRmIsQUFFSixBQUF3QixVQUZwQixBQUdKLFdBSEksQUFJSixLQUFLLEVBQUUsTUFBTSxTQWRSLEFBVUQsQUFJQyxBQUFRLEFBQVM7O21CQUV4Qjs7K0JBQUEsQUFBTywwQkFBUCxBQUErQixVQWhCeEI7Z0NBQUE7QUFBQTs7bUJBQUE7Z0NBQUE7Z0RBa0JQOztzQkFBQSxBQUFLLFNBQVMsRUFBRSxjQUFjLFlBbEJ2QixBQWtCUCxBQUFjLEFBQW9COzttQkFHcEM7O3NCQUFBLEFBQUssU0FBUyxFQUFFLFNBckJQLEFBcUJULEFBQWMsQUFBVzs7bUJBckJoQjttQkFBQTtnQ0FBQTs7QUFBQTtpQ0FBQTtBOzs7Ozs7Ozs7OzZCQXdCRjttQkFDUDs7NkJBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDQTtBQURBO0FBQUEsT0FBQSxrQkFDQSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FEQSxBQUNBLEFBQ0EscUNBQUEsY0FBQSxPQUFHLE9BQU8sRUFBRSxPQUFaLEFBQVUsQUFBUztvQkFBbkI7c0JBQUE7QUFBQTtTQUZBLEFBRUEsQUFDRSxzRUFBQSxBQUFDLHVDQUFLLFVBQVUsS0FBaEIsQUFBcUIsVUFBVSxPQUFPLENBQUMsQ0FBQyxLQUFBLEFBQUssTUFBN0MsQUFBbUQ7b0JBQW5EO3NCQUFBLEFBQ0U7QUFERjt5QkFDRyxjQUFELHNCQUFBLEFBQU07O29CQUFOO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0UsQUFDQSxnQ0FBQSxBQUFDO2VBQ1EsS0FBQSxBQUFLLE1BRGQsQUFDb0IsQUFDbEI7a0JBQVUscUJBQUE7aUJBQUssT0FBQSxBQUFLLFNBQVMsRUFBRSxhQUFhLEVBQUEsQUFBRSxPQUFwQyxBQUFLLEFBQWMsQUFBd0I7QUFGdkQ7O29CQUFBO3NCQUhKLEFBQ0UsQUFFRSxBQU1GO0FBTkU7QUFDRSwyQkFLSCxjQUFELHNCQUFBLEFBQU07O29CQUFOO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0UsQUFDQSxtQ0FBQSxBQUFDO2VBQ1EsS0FBQSxBQUFLLE1BRGQsQUFDb0IsQUFDbEI7a0JBQVUscUJBQUE7aUJBQUssT0FBQSxBQUFLLFNBQVMsRUFBRSxPQUFPLEVBQUEsQUFBRSxPQUE5QixBQUFLLEFBQWMsQUFBa0I7QUFGakQ7O29CQUFBO3NCQVhKLEFBU0UsQUFFRSxBQU1GO0FBTkU7QUFDRSwyQkFLSCxjQUFELHNCQUFBLEFBQU07O29CQUFOO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0UsQUFDQSxpRUFBQSxBQUFDO2VBQ1EsS0FBQSxBQUFLLE1BRGQsQUFDb0IsQUFDbEI7a0JBQVUscUJBQUE7aUJBQUssT0FBQSxBQUFLLFNBQVMsRUFBRSxXQUFXLEVBQUEsQUFBRSxPQUFsQyxBQUFLLEFBQWMsQUFBc0I7QUFGckQ7O29CQUFBO3NCQW5CSixBQWlCRSxBQUVFLEFBTUY7QUFORTtBQUNFLDJCQUtKLEFBQUMsMENBQVEsT0FBVCxNQUFlLFFBQWYsQUFBc0IsU0FBUSxTQUFTLEtBQUEsQUFBSyxNQUE1QyxBQUFrRDtvQkFBbEQ7c0JBekJGLEFBeUJFLEFBQ0E7QUFEQTswQkFDQSxBQUFDO2lCQUNVLEtBQUEsQUFBSyxNQURoQixBQUNzQixBQUNwQjtpQkFGRixBQUdFO2NBSEYsQUFHTzs7b0JBSFA7c0JBQUE7QUFBQTtBQUNFLFNBL0JSLEFBQ0UsQUFHRSxBQTBCRSxBQVVQOzs7Ozs2R0F2RTJCLEE7Ozs7O21CQUNsQjtBLDBCQUFZLE0sQUFBTSxNQUFsQixBO2tEQUVELEVBQUUsUyxBQUFGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBWmMsQSxBQW1GekI7O2tCQUFBLEFBQWUiLCJmaWxlIjoibmV3LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9ub2J1eXVraWZ1amlva2EvRG9jdW1lbnRzL25vYnktY29kaW5nL2JjS2lja3N0YXJ0In0=