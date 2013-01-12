/*! thrill - v0.2.2 - 2013-01-12
* Copyright (c) 2013 Ozan Turgut; Licensed Apache License 2.0 */
thrill=function(){var e=function(e,t){return e.exports=t,t.TESTER_MESSAGE_TYPE={start:1,end:2,"suite start":3,"suite end":4,"test start":5,"test end":6},e.exports}({},{}),t=function(t,n){function s(e){this.socket=e}t.exports=n;var r=e.TESTER_MESSAGE_TYPE,i=t.exports=function(e){e=e||window.queenSocket||function(){var e=window.location.search.match(/(?:\?|\&)queenSocketId=(.*)(?:\&|$)/);if(!e)throw new ReferenceError("Unable to find queen socket id in the url.");return window.parent.iframeSockets[e[1]]}();var t=new s(e);return t};return s.prototype.start=function(e){this.socket([r.start,e])},s.prototype.suite=function(e){this.socket([r["suite start"],e])},s.prototype.test=function(e){this.socket([r["test start"],e])},s.prototype.testEnd=function(e){this.socket([r["test end"],e])},s.prototype.suiteEnd=function(e){this.socket([r["suite end"],e])},s.prototype.end=function(e){if(!e||e.passed===void 0)throw new TypeError('A "passed" variable is required to end the test');this.socket([r.end,e])},t.exports}({},{}),n=function(e,t){function r(e,t,n){var r=0,i=e.length;for(;r<i;r++)t.call(n,e[r],r,e)}function i(e,t,n){var r;for(r in e)e.hasOwnProperty(r)&&t.call(n,e[r],r,e)}function o(e,t,n){var r=0,i=e.length,s=[];for(;r<i;r++)s.push(t.call(n,e[r],r,e));return s}function u(e,t,n){var r,i={};for(r in e)e.hasOwnProperty(r)&&(i[r]=t.call(n,e[r],r,e));return i}function f(e,t,n){var r=0,i=e.length,s=[];for(;r<i;r++)t.call(n,e[r],r,e)&&s.push(e[r]);return s}function l(e,t,n){var r,i={};for(r in e)e.hasOwnProperty(r)&&t.call(n,e[r],r,e)&&(i[r]=e[r]);return i}e.exports=t;var n=t.noop=function(){},s=t.each=function(e,t,n){return e instanceof Array?r.apply(void 0,arguments):i.apply(void 0,arguments)},a=t.map=function(e,t,n){return e instanceof Array?o.apply(void 0,arguments):u.apply(void 0,arguments)},c=t.filter=function(e,t,n){return e instanceof Array?f.apply(void 0,arguments):l.apply(void 0,arguments)},h=t.values=function(e){var t=[];return i(e,function(e){t.push(e)}),t},p=t.keys=function(e){var t=[];return i(e,function(e,n){t.push(n)}),t},d=t.once=function(e){var t=!1,n;return function(){return t?n:(t=!0,n=e.apply(this,arguments),e=null,n)}};return e.exports}({},{}),r=function(e,r){function u(e){var t={},n={},r;return t.reportRunnerStarting=function(t){r=+(new Date),e.start({type:"jasmine"})},t.reportSuiteStarting=function(t){e.suite({name:t.getFullName()})},t.reportSpecStarting=function(t){testStartTime=(new Date).getTime(),e.test({name:t.description,suiteName:t.suite.getFullName()})},t.reportSpecResults=function(r){var i=(new Date).getTime()-testStartTime,o=r.results(),u=r.suite.getFullName();u in n||(n[u]=!0,t.reportSuiteStarting(r.suite)),data={name:r.description,suiteName:u,runtime:o.skipped?0:i,passCount:o.passedCount,failCount:o.failedCount,log:""},o.failedCount>0&&s.each(o.getItems(),function(e){e.passed()||(data.log+=a(e))}),e.testEnd(data)},t.reportSuiteResults=function(t){var n=t.results();e.suiteEnd({name:t.getFullName(),passCount:n.passCount,failCount:n.failedCount})},t.reportRunnerResults=function(t){var i=t.results(),s=+(new Date)-r;e.end({passed:i.passed(),passCount:i.passedCount,failCount:i.failedCount,runtime:s}),n={}},t}function a(e){var t=e.trace.stack,n=e.message;return t?(n&&~n.indexOf(t.substring(0,t.indexOf("\n")-1))&&(t=n+"\n"+t),t=t.split(/\n/g),t=s.filter(t,function(e,t,n){return~e.indexOf("/jasmine.js")?!1:(n[t]=e.replace(/\(.*\/g\/.*?\//,"(").replace(/\?queenSocketId=([\w\-])*/,""),!0)}),t.join("\n")):n}e.exports=r;var i=t,s=n,o=e.exports=function(e){e=e||{};var t=e.jasmine||window.jasmine,n,r=e.thrill||i();n=t.getEnv(),n.addReporter(u(r))};return(typeof THRILL_MANUAL=="undefined"||!THRILL_MANUAL)&&o(),e.exports}({},{});return r}();