var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _regenerator=_interopRequireDefault(require("@babel/runtime/regenerator"));var _objectSpread2=_interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));var urlParse=require('url-parse');var SALESFORCE_CALLBACK_URL='oauth-swift://oauth-callback/salesforce';var OAUTH_GET_TOKEN_GRANT_TYPE='authorization_code';var PARAMETER_DEFAULTS={callbackUrl:SALESFORCE_CALLBACK_URL,scope:'api refresh_token'};function buildOAuth2LoginURL(parameters,state){var urlParameters={client_id:parameters.consumerKey,redirect_uri:parameters.callbackUrl,response_type:parameters.responseType,scope:parameters.scope,state:state};var urlParametersStr=Object.getOwnPropertyNames(urlParameters).map(function(key){return key+"="+encodeURIComponent(urlParameters[key]);}).join('&');return parameters.authorizeUrl+"?"+urlParametersStr;}function fetchAccessToken(parameters,code){var fetchParams={client_secret:parameters.consumerSecret,grant_type:OAUTH_GET_TOKEN_GRANT_TYPE,code:code,client_id:parameters.consumerKey,redirect_uri:parameters.callbackUrl};var form=Object.keys(fetchParams).map(function(k){return k+"="+encodeURIComponent(fetchParams[k]);}).join('&');return fetch(parameters.accessTokenUrl,{method:'post',headers:{'Accept':'application/json','Content-Type':'application/x-www-form-urlencoded; charset=utf-8'},body:form});}module.exports=function(loginUser){return function _callee(parameters){var parametersWithDefaults,state,webLoginURL,callbackUrl,parsed,oauthCode,fetchResult;return _regenerator.default.async(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:parametersWithDefaults=(0,_objectSpread2.default)({},parameters,PARAMETER_DEFAULTS);state='00000000000000000000000000000000'.replace(/0/g,function(){return(0|Math.random()*16).toString(16);});webLoginURL=buildOAuth2LoginURL(parametersWithDefaults,state);_context.next=5;return _regenerator.default.awrap(loginUser(webLoginURL,parametersWithDefaults.callbackUrl));case 5:callbackUrl=_context.sent;parsed=urlParse(callbackUrl,true);if(!(parsed.query.state!==state)){_context.next=9;break;}throw new Error("OAuth2 response state does not match. Expected: "+state+", received: "+parsed.query.state);case 9:oauthCode=parsed.query.code;if(oauthCode){_context.next=12;break;}throw new Error('OAuth2 response has no code');case 12:_context.next=14;return _regenerator.default.awrap(fetchAccessToken(parametersWithDefaults,oauthCode));case 14:fetchResult=_context.sent;if(fetchResult.ok){_context.next=17;break;}throw fetchResult;case 17:_context.next=19;return _regenerator.default.awrap(fetchResult.json());case 19:return _context.abrupt("return",_context.sent);case 20:case"end":return _context.stop();}}});};};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL29hdXRoMkxvZ2luQWRhcHRlci5qcyJdLCJuYW1lcyI6WyJ1cmxQYXJzZSIsInJlcXVpcmUiLCJTQUxFU0ZPUkNFX0NBTExCQUNLX1VSTCIsIk9BVVRIX0dFVF9UT0tFTl9HUkFOVF9UWVBFIiwiUEFSQU1FVEVSX0RFRkFVTFRTIiwiY2FsbGJhY2tVcmwiLCJzY29wZSIsImJ1aWxkT0F1dGgyTG9naW5VUkwiLCJwYXJhbWV0ZXJzIiwic3RhdGUiLCJ1cmxQYXJhbWV0ZXJzIiwiY2xpZW50X2lkIiwiY29uc3VtZXJLZXkiLCJyZWRpcmVjdF91cmkiLCJyZXNwb25zZV90eXBlIiwicmVzcG9uc2VUeXBlIiwidXJsUGFyYW1ldGVyc1N0ciIsIk9iamVjdCIsImdldE93blByb3BlcnR5TmFtZXMiLCJtYXAiLCJrZXkiLCJlbmNvZGVVUklDb21wb25lbnQiLCJqb2luIiwiYXV0aG9yaXplVXJsIiwiZmV0Y2hBY2Nlc3NUb2tlbiIsImNvZGUiLCJmZXRjaFBhcmFtcyIsImNsaWVudF9zZWNyZXQiLCJjb25zdW1lclNlY3JldCIsImdyYW50X3R5cGUiLCJmb3JtIiwia2V5cyIsImsiLCJmZXRjaCIsImFjY2Vzc1Rva2VuVXJsIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJtb2R1bGUiLCJleHBvcnRzIiwibG9naW5Vc2VyIiwicGFyYW1ldGVyc1dpdGhEZWZhdWx0cyIsInJlcGxhY2UiLCJNYXRoIiwicmFuZG9tIiwidG9TdHJpbmciLCJ3ZWJMb2dpblVSTCIsInBhcnNlZCIsInF1ZXJ5IiwiRXJyb3IiLCJvYXV0aENvZGUiLCJmZXRjaFJlc3VsdCIsIm9rIiwianNvbiJdLCJtYXBwaW5ncyI6IjRQQUFBLEdBQU1BLENBQUFBLFFBQVEsQ0FBR0MsT0FBTyxDQUFDLFdBQUQsQ0FBeEIsQ0FFQSxHQUFNQyxDQUFBQSx1QkFBdUIsQ0FBRyx5Q0FBaEMsQ0FDQSxHQUFNQyxDQUFBQSwwQkFBMEIsQ0FBRyxvQkFBbkMsQ0FFQSxHQUFNQyxDQUFBQSxrQkFBa0IsQ0FBRyxDQUN6QkMsV0FBVyxDQUFFSCx1QkFEWSxDQUV6QkksS0FBSyxDQUFFLG1CQUZrQixDQUEzQixDQUtBLFFBQVNDLENBQUFBLG1CQUFULENBQTZCQyxVQUE3QixDQUF5Q0MsS0FBekMsQ0FBZ0QsQ0FDOUMsR0FBTUMsQ0FBQUEsYUFBYSxDQUFHLENBQ3BCQyxTQUFTLENBQUVILFVBQVUsQ0FBQ0ksV0FERixDQUVwQkMsWUFBWSxDQUFFTCxVQUFVLENBQUNILFdBRkwsQ0FHcEJTLGFBQWEsQ0FBRU4sVUFBVSxDQUFDTyxZQUhOLENBSXBCVCxLQUFLLENBQUVFLFVBQVUsQ0FBQ0YsS0FKRSxDQUtwQkcsS0FBSyxDQUFMQSxLQUxvQixDQUF0QixDQVFBLEdBQU1PLENBQUFBLGdCQUFnQixDQUFHQyxNQUFNLENBQzVCQyxtQkFEc0IsQ0FDRlIsYUFERSxFQUV0QlMsR0FGc0IsQ0FFbEIsU0FBQ0MsR0FBRCxRQUFZQSxDQUFBQSxHQUFaLEtBQW1CQyxrQkFBa0IsQ0FBQ1gsYUFBYSxDQUFDVSxHQUFELENBQWQsQ0FBckMsRUFGa0IsRUFHdEJFLElBSHNCLENBR2pCLEdBSGlCLENBQXpCLENBS0EsTUFBVWQsQ0FBQUEsVUFBVSxDQUFDZSxZQUFyQixLQUFxQ1AsZ0JBQXJDLENBQ0QsQ0FFRCxRQUFTUSxDQUFBQSxnQkFBVCxDQUEwQmhCLFVBQTFCLENBQXNDaUIsSUFBdEMsQ0FBNEMsQ0FDeEMsR0FBTUMsQ0FBQUEsV0FBVyxDQUFHLENBQ2hCQyxhQUFhLENBQUVuQixVQUFVLENBQUNvQixjQURWLENBRWhCQyxVQUFVLENBQUUxQiwwQkFGSSxDQUdoQnNCLElBQUksQ0FBSkEsSUFIZ0IsQ0FJaEJkLFNBQVMsQ0FBRUgsVUFBVSxDQUFDSSxXQUpOLENBS2hCQyxZQUFZLENBQUVMLFVBQVUsQ0FBQ0gsV0FMVCxDQUFwQixDQU9BLEdBQU15QixDQUFBQSxJQUFJLENBQUdiLE1BQU0sQ0FBQ2MsSUFBUCxDQUFZTCxXQUFaLEVBQXlCUCxHQUF6QixDQUE2QixTQUFDYSxDQUFELFFBQVNBLENBQUFBLENBQVQsS0FBY1gsa0JBQWtCLENBQUNLLFdBQVcsQ0FBQ00sQ0FBRCxDQUFaLENBQWhDLEVBQTdCLEVBQWlGVixJQUFqRixDQUFzRixHQUF0RixDQUFiLENBRUEsTUFBT1csQ0FBQUEsS0FBSyxDQUFDekIsVUFBVSxDQUFDMEIsY0FBWixDQUE0QixDQUNwQ0MsTUFBTSxDQUFFLE1BRDRCLENBRXBDQyxPQUFPLENBQUUsQ0FDTCxTQUFVLGtCQURMLENBRUwsZUFBZ0Isa0RBRlgsQ0FGMkIsQ0FNcENDLElBQUksQ0FBRVAsSUFOOEIsQ0FBNUIsQ0FBWixDQVNILENBRURRLE1BQU0sQ0FBQ0MsT0FBUCxDQUFpQixTQUFDQyxTQUFELENBQWUsQ0FDOUIsTUFBTyxrQkFBT2hDLFVBQVAsME1BRUNpQyxzQkFGRCwrQkFFOEJqQyxVQUY5QixDQUU2Q0osa0JBRjdDLEVBS0NLLEtBTEQsQ0FLUyxtQ0FBbUNpQyxPQUFuQyxDQUEyQyxJQUEzQyxDQUFpRCxpQkFBTSxDQUFDLEVBQUVDLElBQUksQ0FBQ0MsTUFBTCxHQUFjLEVBQWpCLEVBQXFCQyxRQUFyQixDQUE4QixFQUE5QixDQUFOLEVBQWpELENBTFQsQ0FRQ0MsV0FSRCxDQVFldkMsbUJBQW1CLENBQUNrQyxzQkFBRCxDQUF5QmhDLEtBQXpCLENBUmxDLG1EQVdxQitCLFNBQVMsQ0FBQ00sV0FBRCxDQUFjTCxzQkFBc0IsQ0FBQ3BDLFdBQXJDLENBWDlCLFNBV0NBLFdBWEQsZUFhQzBDLE1BYkQsQ0FhVS9DLFFBQVEsQ0FBQ0ssV0FBRCxDQUFjLElBQWQsQ0FibEIsTUFlRDBDLE1BQU0sQ0FBQ0MsS0FBUCxDQUFhdkMsS0FBYixHQUF1QkEsS0FmdEIsK0JBZ0JHLElBQUl3QyxDQUFBQSxLQUFKLG9EQUE2RHhDLEtBQTdELGdCQUFpRnNDLE1BQU0sQ0FBQ0MsS0FBUCxDQUFhdkMsS0FBOUYsQ0FoQkgsUUFtQkN5QyxTQW5CRCxDQW1CYUgsTUFBTSxDQUFDQyxLQUFQLENBQWF2QixJQW5CMUIsSUFxQkF5QixTQXJCQSwrQkFzQkcsSUFBSUQsQ0FBQUEsS0FBSixDQUFVLDZCQUFWLENBdEJILDREQXlCc0J6QixnQkFBZ0IsQ0FBQ2lCLHNCQUFELENBQXlCUyxTQUF6QixDQXpCdEMsVUF5QkNDLFdBekJELGtCQTJCQUEsV0FBVyxDQUFDQyxFQTNCWiwrQkE0QkdELENBQUFBLFdBNUJILDREQStCUUEsV0FBVyxDQUFDRSxJQUFaLEVBL0JSLHdHQUFQLENBaUNELENBbENEIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgdXJsUGFyc2UgPSByZXF1aXJlKCd1cmwtcGFyc2UnKTtcblxuY29uc3QgU0FMRVNGT1JDRV9DQUxMQkFDS19VUkwgPSAnb2F1dGgtc3dpZnQ6Ly9vYXV0aC1jYWxsYmFjay9zYWxlc2ZvcmNlJ1xuY29uc3QgT0FVVEhfR0VUX1RPS0VOX0dSQU5UX1RZUEUgPSAnYXV0aG9yaXphdGlvbl9jb2RlJ1xuXG5jb25zdCBQQVJBTUVURVJfREVGQVVMVFMgPSB7XG4gIGNhbGxiYWNrVXJsOiBTQUxFU0ZPUkNFX0NBTExCQUNLX1VSTCxcbiAgc2NvcGU6ICdhcGkgcmVmcmVzaF90b2tlbidcbn1cblxuZnVuY3Rpb24gYnVpbGRPQXV0aDJMb2dpblVSTChwYXJhbWV0ZXJzLCBzdGF0ZSkge1xuICBjb25zdCB1cmxQYXJhbWV0ZXJzID0ge1xuICAgIGNsaWVudF9pZDogcGFyYW1ldGVycy5jb25zdW1lcktleSxcbiAgICByZWRpcmVjdF91cmk6IHBhcmFtZXRlcnMuY2FsbGJhY2tVcmwsXG4gICAgcmVzcG9uc2VfdHlwZTogcGFyYW1ldGVycy5yZXNwb25zZVR5cGUsXG4gICAgc2NvcGU6IHBhcmFtZXRlcnMuc2NvcGUsXG4gICAgc3RhdGVcbiAgfVxuXG4gIGNvbnN0IHVybFBhcmFtZXRlcnNTdHIgPSBPYmplY3RcbiAgICAuZ2V0T3duUHJvcGVydHlOYW1lcyh1cmxQYXJhbWV0ZXJzKVxuICAgIC5tYXAoKGtleSkgPT4gYCR7a2V5fT0ke2VuY29kZVVSSUNvbXBvbmVudCh1cmxQYXJhbWV0ZXJzW2tleV0pfWApXG4gICAgLmpvaW4oJyYnKVxuXG4gIHJldHVybiBgJHtwYXJhbWV0ZXJzLmF1dGhvcml6ZVVybH0/JHt1cmxQYXJhbWV0ZXJzU3RyfWBcbn1cblxuZnVuY3Rpb24gZmV0Y2hBY2Nlc3NUb2tlbihwYXJhbWV0ZXJzLCBjb2RlKSB7XG4gICAgY29uc3QgZmV0Y2hQYXJhbXMgPSB7XG4gICAgICAgIGNsaWVudF9zZWNyZXQ6IHBhcmFtZXRlcnMuY29uc3VtZXJTZWNyZXQsXG4gICAgICAgIGdyYW50X3R5cGU6IE9BVVRIX0dFVF9UT0tFTl9HUkFOVF9UWVBFLFxuICAgICAgICBjb2RlLFxuICAgICAgICBjbGllbnRfaWQ6IHBhcmFtZXRlcnMuY29uc3VtZXJLZXksXG4gICAgICAgIHJlZGlyZWN0X3VyaTogcGFyYW1ldGVycy5jYWxsYmFja1VybFxuICAgIH1cbiAgICBjb25zdCBmb3JtID0gT2JqZWN0LmtleXMoZmV0Y2hQYXJhbXMpLm1hcCgoayk9PiBgJHtrfT0ke2VuY29kZVVSSUNvbXBvbmVudChmZXRjaFBhcmFtc1trXSl9YCkuam9pbignJicpO1xuICAgIFxuICAgIHJldHVybiBmZXRjaChwYXJhbWV0ZXJzLmFjY2Vzc1Rva2VuVXJsLCB7XG4gICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7IGNoYXJzZXQ9dXRmLTgnXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IGZvcm1cbiAgICB9KTsgICAgXG5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSAobG9naW5Vc2VyKSA9PiB7XG4gIHJldHVybiBhc3luYyAocGFyYW1ldGVycykgPT4ge1xuXG4gICAgY29uc3QgcGFyYW1ldGVyc1dpdGhEZWZhdWx0cyA9IHsuLi5wYXJhbWV0ZXJzLCAuLi5QQVJBTUVURVJfREVGQVVMVFN9XG5cbiAgICAvLyBHZW5lcmF0ZSByYW5kb20gc3RhdGUgZm9yIE9BdXRoMiBsb2dpblxuICAgIGNvbnN0IHN0YXRlID0gJzAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwJy5yZXBsYWNlKC8wL2csICgpID0+ICgwfE1hdGgucmFuZG9tKCkqMTYpLnRvU3RyaW5nKDE2KSlcblxuICAgIC8vIEJ1aWxkIGxvZ2luIFVSTFxuICAgIGNvbnN0IHdlYkxvZ2luVVJMID0gYnVpbGRPQXV0aDJMb2dpblVSTChwYXJhbWV0ZXJzV2l0aERlZmF1bHRzLCBzdGF0ZSlcblxuICAgIC8vIENhbGwgYnJvd3NlciwgYXdhaXQgZm9yIGxvZyBpbiBpbnRvIHNhbGVzZm9yY2UuXG4gICAgY29uc3QgY2FsbGJhY2tVcmwgPSBhd2FpdCBsb2dpblVzZXIod2ViTG9naW5VUkwsIHBhcmFtZXRlcnNXaXRoRGVmYXVsdHMuY2FsbGJhY2tVcmwpXG5cbiAgICBjb25zdCBwYXJzZWQgPSB1cmxQYXJzZShjYWxsYmFja1VybCwgdHJ1ZSlcblxuICAgIGlmIChwYXJzZWQucXVlcnkuc3RhdGUgIT09IHN0YXRlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYE9BdXRoMiByZXNwb25zZSBzdGF0ZSBkb2VzIG5vdCBtYXRjaC4gRXhwZWN0ZWQ6ICR7c3RhdGV9LCByZWNlaXZlZDogJHtwYXJzZWQucXVlcnkuc3RhdGV9YClcbiAgICB9XG5cbiAgICBjb25zdCBvYXV0aENvZGUgPSBwYXJzZWQucXVlcnkuY29kZVxuICAgIFxuICAgIGlmICghb2F1dGhDb2RlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ09BdXRoMiByZXNwb25zZSBoYXMgbm8gY29kZScpO1xuICAgIH1cblxuICAgIGNvbnN0IGZldGNoUmVzdWx0ID0gIGF3YWl0IGZldGNoQWNjZXNzVG9rZW4ocGFyYW1ldGVyc1dpdGhEZWZhdWx0cywgb2F1dGhDb2RlKTtcblxuICAgIGlmICghZmV0Y2hSZXN1bHQub2spIHtcbiAgICAgIHRocm93IGZldGNoUmVzdWx0O1xuICAgIH1cblxuICAgIHJldHVybiBhd2FpdCBmZXRjaFJlc3VsdC5qc29uKCk7XG4gIH1cbn07Il19