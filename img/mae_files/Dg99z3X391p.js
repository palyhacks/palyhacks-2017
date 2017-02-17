if (self.CavalryLogger) { CavalryLogger.start_js(["jI+82"]); }

__d('FacepileRounded.react',['cx','Image.react','React','Tooltip.react','joinClasses'],(function a(b,c,d,e,f,g,h){'use strict';var i,j,k=c('React').PropTypes;i=babelHelpers.inherits(l,c('React').Component);j=i&&i.prototype;l.prototype.render=function(){var m=this.props,n=m.className,o=m.profiles,p=m.message,q=m.numProfilesToDisplay,r=null;if(p)r=c('React').createElement('div',{className:"_4mnt"},p);var s=q?o.slice(0,q).map(function(t,u){return (this.$FacepileRounded1(t,u));}.bind(this)):o.map(function(t,u){return this.$FacepileRounded1(t,u);}.bind(this));return (c('React').createElement('div',{className:c('joinClasses')("_4mnv",n)},c('React').createElement('div',{className:"_4mnw"},s,this.$FacepileRounded2()),r));};l.prototype.$FacepileRounded2=function(){var m=this.props,n=m.direction,o=m.imageSize,p=m.profiles,q=m.remainingProfilesCount,r=m.numProfilesToDisplay;if(!r)return null;var s=q?q:p.length-r;return (s>0?c('React').createElement('span',{className:"_4mnq _34n6",style:{borderRadius:o,height:o,marginLeft:-(o*.3125)+'px',minWidth:o,position:n==='descending'?'relative':null,zIndex:n==='descending'?0:null}},c('React').createElement('span',{className:"_40vg"},'+'+s)):null);};l.prototype.$FacepileRounded1=function(m,n){var o=this.props,p=o.direction,q=o.imageSize,r=o.profiles,s=o.showNames,t={};if(n>0)t.marginLeft=-(q*.3125)+'px';if(p==='descending'){t.position='relative';t.zIndex=r.length-n;}var u=c('React').createElement(c('Image.react'),{className:"_4mnq",height:q,key:n+m.image_src,style:s?null:t,src:m.image_src,width:q});if(s&&m.name)u=c('React').createElement(c('Tooltip.react'),{className:"_4mns",key:n+m.image_src,style:t,tooltip:m.name},u);return u;};function l(){i.apply(this,arguments);}l.defaultProps={direction:'ascending',imageSize:32,showNames:false};l.propTypes={className:k.string,direction:k.string,imageSize:k.number,message:k.string,numProfilesToDisplay:k.number,remainingProfilesCount:k.number,profiles:k.arrayOf(k.shape({image_src:k.any.isRequired,name:k.string})).isRequired,showNames:k.bool};f.exports=l;}),null);
__d('MessengerAddIconSVG.react',['React'],(function a(b,c,d,e,f,g){'use strict';var h=c('React').PropTypes,i=function j(k){return (c('React').createElement('div',{className:k.className},c('React').createElement('svg',{viewBox:'-8 -8 48 48'},c('React').createElement('title',null,'add to group'),c('React').createElement('path',{d:'M16,0 V32 M0,16 H32',fillRule:'evenodd',clipRule:'evenodd',fill:'none',stroke:k.customColor,strokeWidth:2,strokeMiterlimit:10,strokeLinecap:'round'}))));};i.propTypes={className:h.string,customColor:h.string.isRequired};f.exports=i;}),null);
__d('MessengerAbstractTextInputWithFocus.react',['AbstractTextInput.react','React'],(function a(b,c,d,e,f,g){'use strict';var h,i,j=c('React').PropTypes;h=babelHelpers.inherits(k,c('React').Component);i=h&&h.prototype;k.prototype.componentDidMount=function(){if(this.refs.hasOwnProperty('input'))if(this.props.focused){this.refs.input.focusInput();}else this.refs.input.blurInput();};k.prototype.componentDidUpdate=function(){if(this.refs.hasOwnProperty('input'))if(this.props.focused){this.refs.input.focusInput();}else this.refs.input.blurInput();};k.prototype.render=function(){return (c('React').createElement(c('AbstractTextInput.react'),{className:this.props.className,onChange:this.props.onChange,onFocus:this.props.onFocus,onKeyDown:this.props.onKeyDown,placeholder:this.props.placeholder,ref:'input',value:this.props.value}));};function k(){h.apply(this,arguments);}k.propTypes={className:j.string.isRequired,focused:j.bool.isRequired,onChange:j.func.isRequired,onFocus:j.func.isRequired,onKeyDown:j.func.isRequired,placeholder:j.string.isRequired,value:j.string};f.exports=k;}),null);
__d('MessengerGroupPollingCheckbox.react',['cssVar','cx','Keys','React'],(function a(b,c,d,e,f,g,h,i){'use strict';var j,k,l=c('React').PropTypes;j=babelHelpers.inherits(m,c('React').Component);k=j&&j.prototype;function m(){var n,o;for(var p=arguments.length,q=Array(p),r=0;r<p;r++)q[r]=arguments[r];return o=(n=k.constructor).call.apply(n,[this].concat(q)),this.$MessengerGroupPollingCheckbox1=function(){this.props.onToggle(!this.props.checked);}.bind(this),this.$MessengerGroupPollingCheckbox2=function(event){switch(event.keyCode){case c('Keys').SPACE:event.preventDefault();this.$MessengerGroupPollingCheckbox1();break;default:break;}}.bind(this),o;}m.prototype.render=function(){var n=this.props.checked?this.props.customColor:"rgba(0, 0, 0, 0.10)",o="_2m5p"+(this.props.checked?' '+"_2m5q":'');return c('React').createElement('div',{'aria-checked':this.props.checked?'true':'false',className:o,onClick:this.$MessengerGroupPollingCheckbox1,onKeyDown:this.$MessengerGroupPollingCheckbox2,role:'checkbox',tabIndex:'0'},c('React').createElement('span',{className:"_2m5r",style:{backgroundColor:this.props.customColor,borderColor:n}}));};m.propTypes={checked:l.bool.isRequired,customColor:l.string.isRequired,onToggle:l.func.isRequired};f.exports=m;}),null);
__d("XMessengerGroupPollingCreatePollController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/messaging\/group_polling\/create_poll\/",{});}),null);
__d('MessengerGroupPollingCreatePollFlyout.react',['cx','fbt','AsyncRequest','Keys','Link.react','MessengerAbstractTextInputWithFocus.react','MessengerAddIconSVG.react','MessengerGroupPollingCheckbox.react','MessengerSpinner.react','React','ScrollableArea.react','XMessengerGroupPollingCreatePollController','XUICloseButton.react'],(function a(b,c,d,e,f,g,h,i){'use strict';var j,k,l=c('React').PropTypes,m=30,n=75,o=200;j=babelHelpers.inherits(p,c('React').Component);k=j&&j.prototype;function p(){var q,r;for(var s=arguments.length,t=Array(s),u=0;u<s;u++)t[u]=arguments[u];return r=(q=k.constructor).call.apply(q,[this].concat(t)),this.state={focusIndicator:{isQuestionFocused:true,optionFocusIndex:0},questionText:null,options:[{optionText:null,isSelected:false}],errorTitle:null,errorMessage:null,isLoading:false},this.$MessengerGroupPollingCreatePollFlyout6=function(){var v={optionText:null,isSelected:false},w=this.state.options.concat(v);this.setState({focusIndicator:{isQuestionFocused:false,optionFocusIndex:w.length-1},options:w});}.bind(this),this.$MessengerGroupPollingCreatePollFlyout7=function(v){this.setState({focusIndicator:{isQuestionFocused:true,optionFocusIndex:0},questionText:v.target.value,errorTitle:null,errorMessage:null});}.bind(this),this.$MessengerGroupPollingCreatePollFlyout9=function(v){if(v.keyCode===c('Keys').RETURN){v.preventDefault();this.setState({focusIndicator:{isQuestionFocused:false,optionFocusIndex:0}});}}.bind(this),this.$MessengerGroupPollingCreatePollFlyout11=function(v){v.preventDefault();if(v.keyCode===c('Keys').RETURN)this.$MessengerGroupPollingCreatePollFlyout10();}.bind(this),this.$MessengerGroupPollingCreatePollFlyout10=function(){if(this.state.isLoading)return;this.setState({isLoading:true});var v=this.state.options.filter(function(x){return x.optionText;}),w=c('XMessengerGroupPollingCreatePollController').getURIBuilder().getURI();new (c('AsyncRequest'))().setURI(w).setData({question_text:this.state.questionText,target_id:this.props.threadFBID,option_text_array:v.map(function(x){return x.optionText;}),option_is_selected_array:v.map(function(x){return x.isSelected?1:0;})}).setMethod('POST').setAllowCrossPageTransition(true).setHandler(function(x){var y=x.payload;if(y.status==='failure'&&y.showUser===true){this.setState({errorTitle:y.errorTitle,errorMessage:y.errorMessage,isLoading:false});}else this.props.onSubmitHandler();}.bind(this)).send();}.bind(this),r;}p.prototype.render=function(){var q=this.state.options.map(function(x,y){return c('React').createElement('div',{className:"_9fu",key:y},c('React').createElement(c('MessengerGroupPollingCheckbox.react'),{checked:x.isSelected,customColor:this.props.customColor,onToggle:function(){return this.$MessengerGroupPollingCreatePollFlyout1(y);}.bind(this)}),c('React').createElement(c('MessengerAbstractTextInputWithFocus.react'),{className:"_9fv",focused:!this.state.focusIndicator.isQuestionFocused&&this.state.focusIndicator.optionFocusIndex===y,onChange:function(z){return this.$MessengerGroupPollingCreatePollFlyout2(z,y);}.bind(this),onFocus:function(z){return this.$MessengerGroupPollingCreatePollFlyout3(y);}.bind(this),onKeyDown:function(z){return this.$MessengerGroupPollingCreatePollFlyout4(z,y);}.bind(this),placeholder:i._("Add an option").toString(),value:x.optionText}),c('React').createElement(c('XUICloseButton.react'),{className:"_4y_1",onClick:function(){return this.$MessengerGroupPollingCreatePollFlyout5(y);}.bind(this),size:'small',tooltip:i._("Remove")}));}.bind(this)),r=c('React').createElement(c('Link.react'),{onClick:this.$MessengerGroupPollingCreatePollFlyout6,role:'button',tabIndex:'0'},c('React').createElement(c('MessengerAddIconSVG.react'),{className:"_5n1-",customColor:this.props.customColor})),s=c('React').createElement('div',{className:"_5jmn"},this.state.errorTitle),t=c('React').createElement('div',{className:"_5jmo"},this.state.errorMessage),u=this.state.options.length+1,v=m*u,w=Math.min(Math.max(v,n),o);return c('React').createElement('div',{className:"_5jmp"},c('React').createElement('div',{className:"_5jn1"},i._("Poll")),s,t,c('React').createElement(c('MessengerAbstractTextInputWithFocus.react'),{className:"_9fw",focused:this.state.focusIndicator.isQuestionFocused,onChange:this.$MessengerGroupPollingCreatePollFlyout7,onFocus:function(x){return this.$MessengerGroupPollingCreatePollFlyout8();}.bind(this),onKeyDown:this.$MessengerGroupPollingCreatePollFlyout9,placeholder:i._("Ask a question").toString(),value:this.state.questionText}),c('React').createElement(c('ScrollableArea.react'),{className:"_5nkw",height:w},c('React').createElement('div',{className:"_5jn3"},q,r)),c('React').createElement('div',{className:"_5jn4"+(this.state.isLoading?' '+"_2zwp":''),onClick:this.$MessengerGroupPollingCreatePollFlyout10,onKeyUp:this.$MessengerGroupPollingCreatePollFlyout11,role:'button',style:{backgroundColor:this.props.customColor},tabIndex:'0'},this.state.isLoading?c('React').createElement(c('MessengerSpinner.react'),null):i._("Create Poll")));};p.prototype.$MessengerGroupPollingCreatePollFlyout1=function(q){var r=this.state.options.map(function(s,t){if(t===q)return babelHelpers['extends']({},s,{isSelected:!s.isSelected});return s;});this.setState({focusIndicator:{isQuestionFocused:false,optionFocusIndex:null},options:r});};p.prototype.$MessengerGroupPollingCreatePollFlyout5=function(q){var r=this.state.options.filter(function(u,v){return v!==q;}),s=r.length===0,t=null;if(this.state.focusIndicator.optionFocusIndex!==null&&this.state.focusIndicator.optionFocusIndex!==undefined&&r.length!==0)t=this.state.focusIndicator.optionFocusIndex<q?this.state.focusIndicator.optionFocusIndex:this.state.focusIndicator.optionFocusIndex-1;this.setState({focusIndicator:{isQuestionFocused:s,optionFocusIndex:t},options:r});};p.prototype.$MessengerGroupPollingCreatePollFlyout2=function(q,r){var s=this.state.options.map(function(t,u){if(u===r)return babelHelpers['extends']({},t,{optionText:q.target.value});return t;});this.setState({focusIndicator:{isQuestionFocused:false,optionFocusIndex:r},options:s,errorTitle:null,errorMessage:null});};p.prototype.$MessengerGroupPollingCreatePollFlyout4=function(q,r){if(q.keyCode===c('Keys').RETURN){q.preventDefault();var s=r+1;if(s===this.state.options.length){this.$MessengerGroupPollingCreatePollFlyout6();}else this.setState({focusIndicator:{isQuestionFocused:false,optionFocusIndex:s}});}};p.prototype.$MessengerGroupPollingCreatePollFlyout8=function(){this.setState({focusIndicator:{isQuestionFocused:true,optionFocusIndex:0}});};p.prototype.$MessengerGroupPollingCreatePollFlyout3=function(q){this.setState({focusIndicator:{isQuestionFocused:false,optionFocusIndex:q}});};p.propTypes={customColor:l.string.isRequired,threadFBID:l.string.isRequired,onSubmitHandler:l.func.isRequired};f.exports=p;}),null);
__d('MessengerGroupPollingUtils',['ix','CurrentUser','FacepileRounded.react','MercuryIDs','MercuryParticipants','MessengerTextWithEntities.react','React'],(function a(b,c,d,e,f,g,h){'use strict';var i=2,j={renderEmojiText:function k(l){return (c('React').createElement(c('MessengerTextWithEntities.react'),{renderEmoji:true,renderEmoticons:true,text:l}));},renderVoterFacepiles:function k(l,m,n,o,p){var q=i,r=n-i;if(n===i+1){q=n;r=0;}return (c('React').createElement(c('FacepileRounded.react'),{className:l,imageSize:m,direction:'descending',numProfilesToDisplay:q,remainingProfilesCount:r,profiles:this._getProfilePictures(q,o,p),showNames:true}));},_getProfilePictures:function k(l,m,n){if(n===true){var o=c('CurrentUser').getID(),p=m.indexOf(o);if(p!==-1){var q=m[p];m[p]=m[0];m[0]=q;}}var r=m.slice(0,l).map(function(t){var u=c('MercuryIDs').getParticipantIDFromUserID(t),v=c('MercuryParticipants').getOrFetch(u);return {image_src:v&&v.image_src||h("images\/silhouettes\/person_50x50.png"),name:v&&v.name||'Facebook User'};}),s=m.slice(l,m.length).map(function(t){return {image_src:t,name:''};});return r.concat(s);}};f.exports=j;}),null);
__d("XMessengerGroupPollingUpdateVoteController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/messaging\/group_polling\/update_vote\/",{});}),null);
__d('MessengerGroupPollingFlyout.react',['cx','fbt','AsyncRequest','Keys','Link.react','MessengerAbstractTextInputWithFocus.react','MessengerAddIconSVG.react','MessengerEnvironment','MessengerGroupPollingCheckbox.react','MessengerGroupPollingUtils','MessengerSpinner.react','React','ScrollableArea.react','XMessengerGroupPollingUpdateVoteController'],(function a(b,c,d,e,f,g,h,i){'use strict';var j,k,l=c('React').PropTypes,m=16,n=24,o=28,p=36,q=50,r=200;j=babelHelpers.inherits(s,c('React').Component);k=j&&j.prototype;function s(t){k.constructor.call(this,t);this.$MessengerGroupPollingFlyout3=function(){var v=this.state.newOptions.concat(null);this.setState({focusIndex:v.length-1,newOptions:v});}.bind(this);this.$MessengerGroupPollingFlyout8=function(v){v.preventDefault();if(v.keyCode===c('Keys').RETURN)this.$MessengerGroupPollingFlyout7();}.bind(this);this.$MessengerGroupPollingFlyout7=function(){if(this.state.isLoading)return;this.setState({isLoading:true});var v=this.state.newOptions.filter(function(x){return x;}),w=c('XMessengerGroupPollingUpdateVoteController').getURIBuilder().getURI();new (c('AsyncRequest'))().setURI(w).setData({question_id:this.props.questionID,selected_options:this.state.selectedOptions,new_options:v}).setMethod('POST').setAllowCrossPageTransition(true).setHandler(function(x){var y=x.payload;if(y.status==='failure'&&y.showUser===true){this.setState({errorTitle:y.errorTitle,errorMessage:y.errorMessage,isLoading:false});}else this.props.onSubmitHandler();}.bind(this)).send();}.bind(this);var u=this.$MessengerGroupPollingFlyout1(t.options);this.state={focusIndex:0,selectedOptions:u,errorTitle:null,errorMessage:null,newOptions:[null],isLoading:false};}s.prototype.componentWillReceiveProps=function(t){if(this.props.options==null){var u=this.$MessengerGroupPollingFlyout1(t.options);this.setState({selectedOptions:u});}};s.prototype.render=function(){var t=c('MessengerEnvironment').messengerui;if(!this.props.options)return c('React').createElement('div',{className:"_8bt"+(!t?' '+"_5il4":'')},c('React').createElement(c('MessengerSpinner.react'),{color:'grey'}));var u=t?n:m,v=c('React').createElement('div',{className:"_3lpw"},c('React').createElement('div',{className:"_3lpx"},this.state.errorTitle),c('React').createElement('div',{className:"_3lpy"},this.state.errorMessage)),w=this.props.options&&this.props.options.map(function(ca){return c('React').createElement('div',{className:"_1mqz"+(!t?' '+"_5k8c":''),key:ca.id},c('React').createElement(c('MessengerGroupPollingCheckbox.react'),{checked:this.state.selectedOptions&&this.state.selectedOptions.indexOf(ca.id)!==-1||false,customColor:this.props.customColor,onToggle:function(){return this.$MessengerGroupPollingFlyout2(ca.id);}.bind(this)}),c('React').createElement('div',{className:"_2f83"},c('React').createElement('div',{className:"_1mq-"+(!t?' '+"_2a5a":'')},c('MessengerGroupPollingUtils').renderEmojiText(ca.text)),c('MessengerGroupPollingUtils').renderVoterFacepiles("_4ic7"+(!t?' '+"_8kg":''),u,ca.voters.count,ca.voters.edges.map(function(da){return da.node.id;}),ca.viewer_has_voted)));}.bind(this)),x=this.state.newOptions.map(function(ca,da){return c('React').createElement('div',{className:"_1mqz"+(!t?' '+"_5k8c":''),key:da},c('React').createElement(c('Link.react'),{onClick:this.$MessengerGroupPollingFlyout3,role:'button',tabIndex:'0'},c('React').createElement(c('MessengerAddIconSVG.react'),{className:"_8i7",customColor:this.props.customColor})),c('React').createElement(c('MessengerAbstractTextInputWithFocus.react'),{className:"_8i5",focused:da===this.state.focusIndex,onChange:function(ea){return this.$MessengerGroupPollingFlyout4(ea,da);}.bind(this),onFocus:function(ea){return this.$MessengerGroupPollingFlyout5(da);}.bind(this),onKeyDown:function(ea){return this.$MessengerGroupPollingFlyout6(ea,da);}.bind(this),placeholder:i._("Add an option").toString(),value:ca}));}.bind(this)),y=this.props.options&&this.props.options.length||0,z=y+this.state.newOptions.length,aa=t?p*z:o*z,ba=Math.min(Math.max(aa,q),r);return c('React').createElement('div',{className:"_1mq_"+(!t?' '+"_1mr-":'')},c('React').createElement('div',{className:"_1mr_"},c('MessengerGroupPollingUtils').renderEmojiText(this.props.questionText)),v,c('React').createElement(c('ScrollableArea.react'),{height:ba},c('React').createElement('div',{className:"_1ms0"},w,x)),c('React').createElement('div',{className:"_1ms1"+(this.state.isLoading?' '+"_m1v":''),onClick:this.$MessengerGroupPollingFlyout7,onKeyUp:this.$MessengerGroupPollingFlyout8,role:'button',style:{backgroundColor:this.props.customColor},tabIndex:'0'},this.state.isLoading?c('React').createElement(c('MessengerSpinner.react'),null):i._("Submit")));};s.prototype.$MessengerGroupPollingFlyout1=function(t){var u=t&&t.filter(function(v){return v.viewer_has_voted===true;}).map(function(v){return v.id;});return u;};s.prototype.$MessengerGroupPollingFlyout2=function(t){var u=this.state.selectedOptions;if(!u)return;var v=u.indexOf(t)===-1?u.concat(t):u.filter(function(w){return w!==t;});this.setState({focusIndex:null,selectedOptions:v});};s.prototype.$MessengerGroupPollingFlyout4=function(t,u){var v=this.state.newOptions.map(function(w,x){return x===u?t.target.value:w;});this.setState({focusIndex:u,newOptions:v,errorTitle:null,errorMessage:null});};s.prototype.$MessengerGroupPollingFlyout6=function(t,u){if(t.keyCode===c('Keys').RETURN){t.preventDefault();var v=u+1;if(v===this.state.newOptions.length){this.$MessengerGroupPollingFlyout3();}else this.setState({focusIndex:v});}};s.prototype.$MessengerGroupPollingFlyout5=function(t){this.setState({focusIndex:t});};s.propTypes={customColor:l.string.isRequired,questionID:l.string.isRequired,questionText:l.string.isRequired,options:l.arrayOf(l.object),onSubmitHandler:l.func.isRequired};f.exports=s;}),null);