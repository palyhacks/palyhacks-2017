if (self.CavalryLogger) { CavalryLogger.start_js(["jBTA4"]); }

__d("MercuryMessageSourceTags",[],(function a(b,c,d,e,f,g){f.exports={CHAT:"source:chat",EMAIL:"source:email",MESSENGER:"source:messenger",MOBILE:"source:mobile"};}),null);
__d("MercurySendMessageFields",[],(function a(b,c,d,e,f,g){f.exports={AUTO_RETRY_CNT:"auto_retry_cnt",MANUAL_RETRY_CNT:"manual_retry_cnt"};}),null);
__d('MercuryMessageObject',['fbt','BanzaiODS','MercuryActionStatus','MercuryActionType','MercuryIDs','MercuryLocalIDs','MercuryMessageClientState','MercuryMessageSourceTags','MercurySingletonProvider','MercurySourceType','MercuryThreads','MercuryTimePassed','MercuryTimestamp','MercurySendMessageFields','formatDate'],(function a(b,c,d,e,f,g,h){i.getForFBID=function(n){'use strict';return m.getForFBID(n);};i.get=function(){'use strict';return m.get();};function i(n){'use strict';this.$MercuryMessageObject1=n;this.$MercuryMessageObject2=c('MercuryThreads').getForFBID(n);}i.prototype.constructUserGeneratedMessageObject=function(n,o,p,q,r){'use strict';var s=j(this.$MercuryMessageObject1,c('MercuryActionType').USER_GENERATED_MESSAGE,o,p);if(typeof n=='string')n=n.replace(/^\s+/,'').replace(/\s+$/,'');s.body=n;s.has_attachment=false;s.html_body=false;s.attachments=[];s.specific_to_list=q||[];s.creator_info=r;return s;};i.prototype.constructStickerMessageObject=function(n,o,p){'use strict';var q=j(this.$MercuryMessageObject1,c('MercuryActionType').USER_GENERATED_MESSAGE,o,p);q.has_attachment=true;q.html_body=false;q.attachments=[];q.sticker_id=n;q.specific_to_list=[];return q;};i.prototype.constructAttachmentMessageObject=function(n,o){'use strict';var p=j(this.$MercuryMessageObject1,c('MercuryActionType').USER_GENERATED_MESSAGE,n,o);p.attachments=[];p.specific_to_list=[];return p;};i.prototype.constructLogMessageObject=function(n,o,p,q){'use strict';var r=j(this.$MercuryMessageObject1,c('MercuryActionType').LOG_MESSAGE,n,o);r.log_message_type=p;r.log_message_data=q;if(q&&q.untypedData&&q.untypedData.ttl)r.ephemeral_ttl_mode=q.untypedData.ttl;return r;};i.prototype.constructCTAConfirmationMessageObject=function(n,o,p,q){var r=arguments.length<=4||arguments[4]===undefined?null:arguments[4];'use strict';var s=this.constructUserGeneratedMessageObject(n,o,p,null,null),t={};if(q){t={quick_replies:q,ignore_for_webhook:false};}else t={ignore_for_webhook:true};s.platform_xmd=JSON.stringify(t);if(r&&r.length>0)s.tags=r;return s;};i.prototype.normalizeNewMessage=function(n){'use strict';if(n.status===undefined)n.status=c('MercuryActionStatus').UNSENT;n.timestamp_absolute=h._("Today").toString();n.offline_threading_id=n.offline_threading_id||c('MercuryLocalIDs').generateOfflineThreadingID(n.timestamp);if(!n.offline_threading_id)c('BanzaiODS').bumpEntityKey('chat.web','invalid_otid_generated');n.message_id=n.message_id||n.offline_threading_id;var o=c('MercuryIDs').getParticipantIDFromUserID(this.$MercuryMessageObject1);n.specific_to_list=n.specific_to_list||[];if(n.specific_to_list.length&&n.specific_to_list.indexOf(o)===-1)n.specific_to_list.push(o);if(!n.thread_id){n.thread_id='root:'+n.offline_threading_id;}else{var p=this.$MercuryMessageObject2.getThreadMetaNow(n.thread_id);if(p&&p.ephemeral_ttl_mode!==null&&n.ephemeral_ttl_mode===undefined)n.ephemeral_ttl_mode=p.ephemeral_ttl_mode;}if(n.specific_to_list.length==1){n.thread_id='user:'+this.$MercuryMessageObject1;}else if(n.specific_to_list.length==2){var q=n.specific_to_list[0]==o?n.specific_to_list[1]:n.specific_to_list[0];n.thread_id=c('MercuryIDs').getThreadIDFromParticipantID(q);}if(!n.specific_to_list.length){var r=c('MercuryIDs').tokenize(n.thread_id),s=r.type,t=r.value;if(s=='user')n.specific_to_list=['fbid:'+t,o];}if(!n[c('MercurySendMessageFields').MANUAL_RETRY_CNT])n[c('MercurySendMessageFields').MANUAL_RETRY_CNT]=0;};i.prototype.normalizeResendMessage=function(n){'use strict';n.status=c('MercuryActionStatus').RESENDING;n.timestamp=Date.now();n[c('MercurySendMessageFields').MANUAL_RETRY_CNT]+=1;};i.prototype.normalizeAddAttachmentPlaceholder=function(n,o,p){'use strict';if(p.preview_attachments.length>0){n.has_attachment=true;n.preview_attachments=p.preview_attachments;}n.client_state=c('MercuryMessageClientState').DO_NOT_SEND_TO_SERVER;n.status=c('MercuryActionStatus').RESENDING;n.upload_id=o;};function j(n,o,p,q){var r=l(p)?[c('MercuryMessageSourceTags').CHAT]:[],s=Date.now(),t=c('formatDate')(new Date(s),'g:ia'),u=k(s),v={action_type:o,thread_id:q,author:c('MercuryIDs').getParticipantIDFromUserID(n),author_email:null,timestamp:s,timestamp_absolute:u,timestamp_relative:t,timestamp_time_passed:c('MercuryTimePassed').TODAY,is_unread:false,is_forward:false,is_filtered_content:false,is_filtered_content_bh:false,is_filtered_content_account:false,is_filtered_content_quasar:false,is_filtered_content_invalid_app:false,is_spoof_warning:false,source:p,source_tags:r};return v;}function k(n){try{return new Date(n).toLocaleDateString();}catch(o){var p=c('MercuryTimestamp').getFormatedTimestamp(n);return p.absolute;}}function l(n){switch(n){case c('MercurySourceType').CHAT_WEB:case c('MercurySourceType').CHAT_JABBER:case c('MercurySourceType').CHAT_IPHONE:case c('MercurySourceType').CHAT_MEEBO:case c('MercurySourceType').CHAT_ORCA:case c('MercurySourceType').CHAT_TEST:case c('MercurySourceType').CHAT:return true;default:return false;}}var m=new (c('MercurySingletonProvider'))(i);f.exports=i;}),null);
__d('MercuryMessageActions',['MercuryActionType','MercuryDispatcher','MercuryMessageObject','MercuryPayloadSource','MercuryServerRequests','MercurySingletonMixin'],(function a(b,c,d,e,f,g){'use strict';function h(i){this.$MercuryMessageActions1=i;this.$MercuryMessageActions2=c('MercuryMessageObject').getForFBID(this.$MercuryMessageActions1);this.__serverRequests=c('MercuryServerRequests').getForFBID(this.$MercuryMessageActions1);this.__dispatcher=c('MercuryDispatcher').getForFBID(this.$MercuryMessageActions1);}h.prototype.send=function(i,j,k){j=j||Function.prototype;this.$MercuryMessageActions2.normalizeNewMessage(i);this.__dispatcher.handleUpdate(this.__constructClientSingleMessagePayload(babelHelpers['extends']({},i),c('MercuryPayloadSource').CLIENT_SEND_MESSAGE));this.__serverRequests.sendNewMessage(i,k);j(i.thread_id);};h.prototype.resend=function(i,j){var k=babelHelpers['extends']({},i);this.$MercuryMessageActions2.normalizeResendMessage(k);this.send(k,undefined,j);};h.prototype.addAttachmentPlaceholder=function(i,j,k){this.$MercuryMessageActions2.normalizeAddAttachmentPlaceholder(i,j,k);this.$MercuryMessageActions2.normalizeNewMessage(i);this.__dispatcher.handleUpdate(this.__constructClientSingleMessagePayload(babelHelpers['extends']({},i),c('MercuryPayloadSource').CLIENT_SEND_MESSAGE));};h.prototype.cancelAttachmentPlaceholder=function(i,j){this.__dispatcher.handleUpdate(this.__constructClientSingleMessagePayload({upload_id:i,upload_data:j,action_type:c('MercuryActionType').CANCEL_ATTACHMENT_PLACEHOLDER},c('MercuryPayloadSource').CLIENT_SEND_MESSAGE));};h.prototype.confirmAttachmentPlaceholder=function(i,j){this.__dispatcher.handleUpdate(this.__constructClientSingleMessagePayload({upload_id:i,upload_data:j,action_type:c('MercuryActionType').CONFIRM_ATTACHMENT_PLACEHOLDER},c('MercuryPayloadSource').CLIENT_SEND_MESSAGE));};h.prototype['delete']=function(i,j,k){this.__dispatcher.handleUpdate(this.$MercuryMessageActions3(i,j,c('MercuryActionType').DELETE_MESSAGES,k||c('MercuryPayloadSource').CLIENT_DELETE_MESSAGES));};h.prototype.unwrap=function(i){this.__dispatcher.handleUpdate(this.__constructClientSingleMessagePayload({thread_id:i.thread_id,unwrapped_message_id:i.message_id,action_type:c('MercuryActionType').UNWRAP_MESSAGE},c('MercuryPayloadSource').CLIENT_UNWRAP_MESSAGE));};h.prototype.__constructClientSingleMessagePayload=function(i,j){return {actions:[i],from_client:true,payload_source:j};};h.prototype.$MercuryMessageActions4=function(i,j){return {actions:[i],from_client:false,payload_source:j};};h.prototype.$MercuryMessageActions3=function(i,j,k,l){return {actions:[{action_type:k,thread_id:i,message_ids:j}],from_client:true,payload_source:l};};Object.assign(h,c('MercurySingletonMixin'));f.exports=h;}),null);
__d('MercuryTriodeSourceUtil',['MessengerEnvironment','MercurySourceType'],(function a(b,c,d,e,f,g){'use strict';var h={getMercuryTriodeSource:function i(){return c('MessengerEnvironment').messengerdotcom?c('MercurySourceType').MESSENGER_WEB:c('MercurySourceType').TITAN_WEB;}};f.exports=h;}),null);
__d('SoundPlayer',['URI','createArrayFromMixed'],(function a(b,c,d,e,f,g){var h=null,i={};function j(p){var q=new (c('URI'))(p);if(!q.getDomain())return new (c('URI'))(window.location.href).setPath(q.getPath()).toString();return p;}function k(p){var q=new (c('URI'))(p).getPath();if(/\.mp3$/.test(q))return 'audio/mpeg';if(/\.og[ga]$/.test(q))return 'audio/ogg';return '';}function l(){if(!h){var p=document.createElement('audio');if(!p||!p.canPlayType)return null;p.setAttribute('preload','auto');document.body.appendChild(p);h=p;}return h;}function m(p){return i[p];}function n(p,q){i[p]=q;}var o={init:function p(q){},createAndPlayNewNative:function p(q,r){var s=document.createElement('audio');s.setAttribute('preload','auto');document.body.appendChild(s);s.src=j(q);if(r){s.setAttribute('loop','');}else s.removeAttribute('loop');s.play();n(q,s);return;},play:function p(q,r){q=c('createArrayFromMixed')(q);var s=l();for(var t=0;s&&t<q.length;++t){var u=q[t],v=m(u);if(v){if(r){v.setAttribute('loop','');}else v.removeAttribute('loop');v.play();return;}var w=k(u);if(!s.canPlayType(w))continue;o.createAndPlayNewNative(u,r);return;}},stop:function p(q){q=c('createArrayFromMixed')(q);for(var r=0;r<q.length;++r){var s=j(q[r]),t=m(q[r]);if(t&&t.src==s){t.pause();t.removeAttribute('src');t.src=s;}}}};f.exports=o;}),null);
__d('Grid.react',['cx','React','joinClasses'],(function a(b,c,d,e,f,g,h){var i,j,k,l,m=c('React').PropTypes;i=babelHelpers.inherits(n,c('React').Component);j=i&&i.prototype;n.prototype.render=function(){'use strict';var p=this.props,q=p.alignh,r=p.alignv,s=p.children,t=p.cols,u=p.fixed,v=p.spacing,w=c('React').Children.count(s),x=[],y=[],z=0;c('React').Children.forEach(s,function(aa,ba){if(aa===null||aa===undefined)return;var ca=aa.type===o;z+=ca?Math.max(aa.props.colSpan||0,1):1;var da=z===t?"_51mw":'';if(!ca){aa=c('React').createElement(o,{alignh:q,alignv:r,className:c('joinClasses')(v,da),key:aa.key||ba},aa);}else aa=c('React').cloneElement(aa,{key:aa.key||ba,alignh:aa.props.alignh||q,alignv:aa.props.alignv||r,className:c('joinClasses')(aa.props.className,v,da)});y.push(aa);if(z%t===0||ba+1===w){if(u&&z<t){for(var ea=z;ea<t;ea++)y.push(c('React').createElement(o,{key:ba+ea}));z=t;}x.push(c('React').createElement('tr',{className:"_51mx",key:ba},y));y=[];z=0;}});return (c('React').createElement('table',babelHelpers['extends']({},this.props,{className:c('joinClasses')(this.props.className,"uiGrid"+(' '+"_51mz")+(u?' '+"_5f0n":'')),cellSpacing:'0',cellPadding:'0'}),c('React').createElement('tbody',null,x)));};function n(){'use strict';i.apply(this,arguments);}n.propTypes={cols:m.number.isRequired,fixed:m.bool,alignv:m.oneOf(['top','middle','bottom']),alignh:m.oneOf(['left','center','right']),spacing:m.string};k=babelHelpers.inherits(o,c('React').Component);l=k&&k.prototype;o.prototype.render=function(){'use strict';var p=c('joinClasses')(this.props.className,"_51m-"+(this.props.alignv==='top'?' '+"vTop":'')+(this.props.alignv==='middle'?' '+"vMid":'')+(this.props.alignv==='bottom'?' '+"vBot":'')+(this.props.alignh==='left'?' '+"hLeft":'')+(this.props.alignh==='center'?' '+"hCent":'')+(this.props.alignh==='right'?' '+"hRght":''));return (c('React').createElement('td',babelHelpers['extends']({},this.props,{className:p})));};function o(){'use strict';k.apply(this,arguments);}o.propTypes={alignv:m.oneOf(['top','middle','bottom']),alignh:m.oneOf(['left','center','right'])};n.GridItem=o;f.exports=n;}),null);
__d('StoreBasedStateMixinHelper',['invariant','SubscriptionsHandler'],(function a(b,c,d,e,f,g,h){'use strict';function i(j){this.$StoreBasedStateMixinHelper1=j;this.$StoreBasedStateMixinHelper2=new (c('SubscriptionsHandler'))();}i.prototype.subscribeCallback=function(j){var k=this.$StoreBasedStateMixinHelper1.map(function(l){if(l.hasChanged&&l.getDispatchToken&&l.addListener){return l.addListener(j);}else if(l.subscribe){return l.subscribe('change',j);}else if(l.addListener){return l.addListener('change',j);}else h(0);});if(this.$StoreBasedStateMixinHelper1.length>0)this.$StoreBasedStateMixinHelper2.addSubscriptions.apply(this.$StoreBasedStateMixinHelper2,k);};i.prototype.release=function(){this.$StoreBasedStateMixinHelper2.release();};f.exports=i;}),null);
__d('StoreAndPropBasedStateMixin',['invariant','StoreBasedStateMixinHelper','setImmediate'],(function a(b,c,d,e,f,g,h){'use strict';var i=function(){for(var j=arguments.length,k=Array(j),l=0;l<j;l++)k[l]=arguments[l];return {getInitialState:function m(){return this.constructor.calculateState(this.props);},componentWillMount:function m(){this.constructor.calculateState||h(0);this._recalculateStateID=null;var n=function(){if(this.isMounted())this.setState(this.constructor.calculateState(this.props));this._recalculateStateID=null;}.bind(this);this._mixin=new (c('StoreBasedStateMixinHelper'))(k);this._mixin.subscribeCallback(function(){if(this._recalculateStateID===null)this._recalculateStateID=c('setImmediate')(n);}.bind(this));},componentWillReceiveProps:function m(n){this.setState(this.constructor.calculateState(n));},componentWillUnmount:function m(){this._mixin.release();this._mixin=null;}};}.bind(this);f.exports=i;}),null);