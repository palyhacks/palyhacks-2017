if (self.CavalryLogger) { CavalryLogger.start_js(["gFIsl"]); }

__d('MessengerLeaveGroupAction',['MercuryIDs','MercuryLogMessageType','MercuryMessageActions','MercuryMessageObject','MercuryThreadInfo','MercuryTriodeSourceUtil'],(function a(b,c,d,e,f,g){var h={leaveGroup:function i(j,k){if(c('MercuryThreadInfo').isEmptyLocalThread(j))return;var l=c('MercuryMessageObject').getForFBID(k),m=l.constructLogMessageObject(c('MercuryTriodeSourceUtil').getMercuryTriodeSource(),j.thread_id,c('MercuryLogMessageType').UNSUBSCRIBE,{removed_participants:[c('MercuryIDs').getParticipantIDFromUserID(k)]}),n=c('MercuryMessageActions').getForFBID(k);n.send(m);}};f.exports=h;}),null);