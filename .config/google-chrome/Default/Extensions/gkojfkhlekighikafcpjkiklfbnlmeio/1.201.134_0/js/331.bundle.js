// LICENSE_CODE ZON
"use strict";(self["webpackChunk"]=self["webpackChunk"]||[]).push([[331,345],{7345:(module,exports,__webpack_require__)=>{var __WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__;// LICENSE_CODE ZON
!(__WEBPACK_AMD_DEFINE_ARRAY__=[__webpack_require__(7439),__webpack_require__(9824),__webpack_require__(6262),__webpack_require__(6386),__webpack_require__(932),__webpack_require__(4336),__webpack_require__(4996),__webpack_require__(901),__webpack_require__(918),__webpack_require__(8915),__webpack_require__(6545),__webpack_require__(1291),__webpack_require__(5250),__webpack_require__(843),__webpack_require__(2181),__webpack_require__(4118),__webpack_require__(9641)],__WEBPACK_AMD_DEFINE_RESULT__=function(_,zerr,version_util,etask,date,zescape,sprintf,user_agent,ajax,storage,array,zutil,be_vpn_util,svc_util,be_no_log,zconf,conf){const E={};const is_bg=be_vpn_util.is_bg();const chrome=window.chrome;const assign=Object.assign,if_set=zutil.if_set;let ajax_cb,bext_config_cb;be_no_log=be_no_log.default;const{www_host}=conf;E.os_guess=user_agent.guess();E.browser_guess=user_agent.guess_browser();E.os_win=()=>E.os_guess.os=="windows";E.os_win8=()=>E.os_guess.version==8;E.os_mac=()=>E.os_guess.os=="macos";E.is_mobile=()=>E.os_guess.mobile;let _is_laptop;E.is_laptop=()=>_is_laptop;E.version=()=>zconf.ZON_VERSION;E.install_version=()=>{let ext=get_bg_module("be_ext");if(ext)return ext.get("install_version")};E.install_ts=()=>{let ext=get_bg_module("be_ext");return ext&&ext.get("install_ts")||Date.now()};var check_opera=/\bOPR\b\/(\d+)/i;E.browser=()=>{if(E.browser_guess.hola_browser)return"hola";if(E.browser_guess.edge)return"edge";var ua=navigator.userAgent;var opera=check_opera.exec(ua);return conf.browser.firefox?"firefox":conf.browser.opera||opera&&opera[1]?"opera":"chrome"};E.qs_ajax=o=>{var info={ext_ver:E.version(),install_ver:E.install_version(),install_ts:E.install_ts(),browser:E.browser(),product:E.get_product(),src_country:storage.get("src_country")};if(zutil.is_mocha()){info.browser=undefined;info.install_ts=undefined}assign(info,o);for(var k in info){if(info[k]===undefined)delete info[k]}return info};let storage_perr_sent;storage.on_err=(api,key,err)=>{if(zutil.is_mocha())return;zerr("%s failed %s %s",api,key,zerr.e2s(err));if(storage_perr_sent)return;storage_perr_sent=true;E.perr("be_storage_err",api+" "+key,{err,rate_limit:{count:1}})};E.get_install_ms=()=>{let ts=E.install_ts();return ts?Date.now()-ts:0};E.get_ua_update_ms=()=>{let ts=storage.get_int("ua_update_ts");return ts?Date.now()-ts:0};const get_bg_module=name=>{if(!is_bg)return null;let bg_main=E.rmt||window.be_bg_main;return name=="be_bg_main"?bg_main:bg_main&&bg_main[name]};E.get_manifest=()=>{if(chrome.runtime&&chrome.runtime.getManifest)return chrome.runtime.getManifest()};E.build_info=opt=>{let ext=get_bg_module("be_ext");let mode=get_bg_module("be_mode");let tabs=get_bg_module("be_tabs");let be_trial=get_bg_module("be_trial");let be_rule=get_bg_module("be_rule");let be_vpn=get_bg_module("be_vpn");let info={version:zconf.ZON_VERSION,local_ts:new Date,src_country:storage.get("src_country")};let manifest=E.get_manifest();if(manifest)info.manifest_version=manifest.version;if(mode){if_set(mode.get("svc.version"),info,"svc_version");if_set(mode.get("svc.appid"),info,"svc_appid");if_set(mode.get("pending"),info,"svc_mode_pending");if_set(mode.get("svc.campaign"),info,"campaign");if_set(mode.get("svc.uuid"),info,"svc_uuid")}if(ext){if_set(ext.get("ext.active"),info,"ext.active");if_set(ext.get("ext.suspended"),info,"ext.suspended");if_set(ext.get("ext.conflict"),info,"ext_conflict");if_set(ext.get("no_permission"),info,"no_permission");if_set(ext.get("is_premium")&&1,info,"is_premium");if_set(ext.get("hola_uid"),info,"hola_uid");if_set(ext.get("session_key"),info,"session_key");if_set(ext.get("pap_a_aid"),info,"aff_id");let bext_config=ext.get("bext_config");if_set(zutil.get(bext_config,"version"),info,"conf_ver");if(be_trial){const total_watch_time=be_trial.get_param_from_state("total_watch_time");if(total_watch_time)info.trial_watch_time=date.dur_to_str(total_watch_time);if_set(be_trial.get_watch_time_ms()||undefined,info,"trial_watch_time_ms");if_set(be_trial.get_ab_test_str(),info,"ab_test")}let f;if(f=ext.get("features"))assign(info,f)}let active_url;if(tabs){active_url=tabs.get("active.url");info.active_tab=tabs.get("active.id");if(tabs.get("active.incognito"))info.active_incognito=true}if(active_url&&be_rule){let rules=be_vpn_util.get_rules(be_rule.get("rules"),active_url);if(zutil.get(rules,"0.enabled")){if_set(svc_util.get_root_url(active_url),info,"root_url");info.proxy_country=rules[0].country}}let enabled_for_browser=be_vpn&&be_vpn.is_enabled_for_browser();info.unblocking_mode=E.full_browser_mode()||enabled_for_browser?"browser":"tab";if_set(opt&&opt.is_tpopup,info,"is_tpopup");if(chrome)info.product_type=conf.type;info.id=zutil.get(chrome,"runtime.id");var browser=E.browser();var browser_ver=browser=="opera"?E.browser_guess.opera_version:E.browser_guess.version;info.browser=browser+" "+browser_ver;info.browser_build=conf.browser.name;info.platform=navigator.platform;info.user_agent=navigator.userAgent;if(window.hola){var now=Date.now();var install_ms;if(install_ms=E.get_install_ms()){info.install_ms=install_ms;info.install_time=select_duration(install_ms)}var update,diff;if((update=ext&&ext.get("update_ts"))&&(diff=now-update)<=date.ms.MIN){info.after_update=true;info.update_ms=diff}}return info};var durations=[{name:"0-1h",length:1},{name:"1h-1d",length:1*24},{name:"1d-2d",length:2*24},{name:"2d-1w",length:7*24},{name:"1w-2w",length:14*24},{name:"2w-1m",length:30*24},{name:"1m-3m",length:90*24},{name:"3m-6m",length:180*24},{name:">=6m",length:Infinity}];function select_duration(len){len/=date.ms.HOUR;for(var i=0;i<durations.length;++i){if(len<durations[i].length)return durations[i].name}}E.build=(opt,add_build)=>{const info=Object.assign(E.build_info(opt),add_build||{});let s="";for(let f in info)s+=(s&&"\n")+f+": "+info[f];return s};E.perr_id=(id,new_name)=>{if(new_name)return"vpn."+E.browser()+"."+id;if(!id.match(/^be_/))id="be_"+id;return id};function perr_send(id,info,opt){opt=zutil.clone(opt||{});var qs=opt.qs||{},data=opt.data||{};data.is_json=1;if(info&&typeof info!="string")info=zerr.json(info);var err=opt.err;if(err){if(!info)info=""+(err.message||zerr.json(err));else if(!opt.bt)opt.bt=""+(err.message||zerr.json(err));if(err.hola_info){opt.bt="status "+err.hola_info.status+" "+err.hola_info.method+" "+err.hola_info.url+" text "+(""+err.hola_info.response_text).substr(0,256)+"\n"+(opt.bt||"")}}data.info=info;qs.id=id;opt={url:conf.url_perr+"/perr",qs,data,method:"POST",json:1};return ajax_cb?ajax_cb(opt):ajax(opt)}function perr_install(perr_orig,pending){while(pending.length)perr_send.apply(null,pending.shift());return function(id,info,opt){perr_orig.apply(null,arguments);return perr_send(id,info,opt)}}function laptop_test(){_is_laptop=storage.get("is_laptop");if(!_is_laptop&&!E.is_mobile()&&navigator&&navigator.getBattery){navigator.getBattery().then((function(b){_is_laptop=!b.charging||b.chargingTime!=0;storage.set("is_laptop",_is_laptop)}))}}E.init=()=>{laptop_test();zerr.perr_install(perr_install)};E.get_product=()=>conf.type;E.get_connection_type=()=>{const connection=navigator&&(navigator.connection||navigator.mozConnection||navigator.webkitConnection);return connection&&connection.type};E.get_device_type=()=>E.is_mobile()?"mobile":_is_laptop?"laptop":"desktop";const get_ext_opt=()=>({ext_ver:E.version(),install_ver:E.install_version()||E.version(),install_ts:E.install_ts(),src_country:storage.get("src_country"),browser:E.browser(),now:E.now()});E.get_site_key=root_url=>svc_util.get_site_key(E.get_bext_config(),get_ext_opt(),root_url);E.is_same_site=(root_url1,root_url2)=>{if(root_url1==root_url2)return true;let key1=E.get_site_key(root_url1),key2=E.get_site_key(root_url2);return!!(key1&&key2&&key1==key2)};E.get_site_conf=(root_url,path,def)=>svc_util.get_site_conf(E.get_bext_config(),get_ext_opt(),root_url,path,def);E.get_trial_conf=(root_url,trial,path,def)=>{if(trial&&trial.conf)return path?zutil.get(trial.conf,path,def):trial.conf||def;let cfg=E.get_bext_config();let ext_opt=assign({trial_state:trial},get_ext_opt());return svc_util.get_trial_conf(cfg,ext_opt,root_url,path,def)};E.get_suggestion_conf=(site_conf,src_country)=>{if(!site_conf)return;src_country=(src_country||"").toUpperCase();let suggestion_popup=site_conf.suggestion_popup||{};return suggestion_popup[src_country]===undefined?suggestion_popup["*"]:suggestion_popup[src_country]};E.convert_url2regex=(conf,name)=>{const rules=conf&&conf[name];if(!rules)return;conf[name]=rules.map((rule=>assign({},rule,{url:typeof rule.url=="string"?new RegExp(rule.url.replace(/\./g,"\\.").replace(/\*\*/,"*").replace(/^\*/,"").replace(/\*/g,".*")):rule.url})))};E.find_conf_rule_by_url=(conf,name,url)=>{const rules=conf&&conf[name];if(rules)return rules.find((r=>r.url&&r.url.test&&r.url.test(url)))};E.get_site_verify_conf=(root_url,url,country)=>{let verify;if(!(verify=E.get_site_conf(root_url,"verify")))return;let sv,site,name=verify[country]===undefined?"*":country;if(!(site=E.find_conf_rule_by_url(verify,name,url))&&(!(sv=verify[name])||!sv.find((v=>!v.url)))){return}let key=E.get_site_key(root_url),idx=key.indexOf("_");return assign({id:key.slice(0,idx!=-1?idx:undefined)},site)};E.get_dont_show_def_period=()=>E.CG("popup.dont_show_def_period","7d");E.reload_ext=(cb,period)=>{var info;period=period||date.ms.MIN;if(!(info=storage.get_json("reload_ext")))info={ts:Date.now(),count:0};var diff=Date.now()-info.ts;if(diff>period||diff<0){info.ts=Date.now();info.count=1}else if(info.count<2)info.count++;else return zerr("too many reload_ext "+info.count);storage.set_json("reload_ext",info);cb();return true};E.reload_ext_native=function(args){E.perr("be_runtime_reload_ext");storage.set("reload_ext_ts",Date.now());if(chrome.runtime.reload)return chrome.runtime.reload();var bg=chrome.extension.getBackgroundPage();bg.location.reload();if(window!=bg)window.close()};E.check_permission=name=>{if(!chrome||!chrome.permissions)return;return etask({name:"check_permission",cancel:true},(function*check_permission(){try{let info={origins:["<all_urls>"]};if(name)info.permissions=[name];chrome.permissions.contains(info,(res=>this.continue(res)));return yield this.wait()}catch(e){E.perr("check_permission_failed",{},{err:e})}}))};E.grant_permission=function(name){if(!chrome||!chrome.permissions)return;return etask({name:"grant_permission",cancel:true},(function*grant_permission(){try{chrome.permissions.request({permissions:[name],origins:["<all_urls>"]},(res=>this.continue(res)));return yield this.wait()}catch(e){E.perr("grant_permission_failed",{},{err:e})}}))};E.set_ajax_cb=cb=>{ajax_cb=cb};E.set_bext_config_cb=cb=>{bext_config_cb=cb};E.format_log=log=>{const skips=[/backbone\.\w+\./,/ajax.*(perr| url )/,/perr.*rate too high/,/connection.*tpopup(_int)?:[0-9]+/,/be_tab_unblocker.*chrome-extension/,/stop .*cws/,/: (tab:[\d-]+ )?[a-z.]*popup /,/fetch_rules/,/be_req_bw/,/update url .* is_vpn false/,/checking if site has high unblocking/,/impl\.init/,/be_(bw_)?req_err/,/not_working_trigger/,/be\.ccgi\.send/,/be_vpn_total_active_time/,/be_media_failure/];const formats=[{from:/(perr [\w.]+) .*$/,to:"$1"}];const format=line=>{let ret=line;formats.forEach((f=>{ret=ret.replace(f.from,f.to)}));return ret};const map=line=>{if(!/]$/.test(line))return format(line);let cnt=0,str;let args_len=line.split("").reverse().findIndex((c=>{if(c=='"')return void(str=!str);return!str&&(cnt+=c=="]"?1:c=="["?-1:0)==0}));if(args_len==-1)return format(line);args_len++;const fmt=line.slice(0,-args_len);try{const args=JSON.parse(line.slice(-args_len));line=sprintf.apply(null,[fmt].concat(args))}catch(e){line+=" (truncated)"}return format(line)};return(log||[]).map(map).filter((line=>!skips.find((s=>s.test(line)))))};function throttle_log(log,agg){const throttle=[{test:/tab_unblocker slow/,per:date.ms.MIN},{test:/media failure detected/,per:date.ms.SEC},{test:/popup not allowed/},{test:/tab already attached/},{test:/perr be_wrong_agent/}];return log.map((l=>{let t=throttle.find((_t=>_t.test.test(l)));if(!t)return l;let m,prefix=(m=l.match(/^\[[\w[\]]+\] /))&&m[0]||"";let _l=l.replace(prefix,"");let date_str=_l.substr(0,23),d=new Date(date_str);if(!t.last){t.last=d;t.count=0;return l}let count=++t.count;if(!t.per||agg&&d-t.last<t.per)return;t.last=d;t.count=0;return agg&&count>1?prefix+date_str+" x"+count+_l.substr(23):l})).filter((l=>l))}E.get_zerr_log=()=>zerr.log?E.format_log(zerr.log).slice(-zerr.log.max_size):[];E.get_log=(ui_log=[])=>{let idx=0;const be_ext=get_bg_module("be_ext");const is_premium=be_ext&&be_ext.get("is_premium");const map=f=>l=>({from:f,line:l,idx:idx++});const log=E.get_zerr_log().map(map(is_bg?"bg":"ui")).concat(ui_log.map(map("ui"))).sort(((a,b)=>a.from==b.from?a.idx-b.idx:a.line.localeCompare(b.line))).map((c=>"["+(is_premium?"P":"F")+"]["+c.from+"] "+c.line));return throttle_log(log,true)};E.perr_opt=(id,info,opt)=>{const bg_main=get_bg_module("be_bg_main");let{err,bt,filehead}=opt,ver=E.version();bt=bt||err&&zerr.e2s(err);if(err&&err.hola_info){bt="status "+err.hola_info.status+" "+err.hola_info.method+" "+err.hola_info.url+" text "+(""+err.hola_info.response_text).substr(0,256)+"\n"+bt}if(err&&err.etask)opt.err=_.omit(err,"etask");let qs={id,ext_ver:ver,product:E.get_product(),browser:E.browser()};if(opt.with_log)filehead=(filehead||"")+"\n"+E.get_log(opt.ui_log);opt.data={bt,info,filehead,ver,build:E.build({is_tpopup:opt.is_tpopup},info.build)};qs.uuid=bg_main&&bg_main.get("uuid")||storage.get("uuid");opt.qs=qs;let err_re=/err|slow|problem|fail|bad|mismatch|invalid|wrong|missing/;opt.level=opt.level||(err||bt||id.match(err_re)?zerr.L.ERR:zerr.L.NOTICE);return{id,info,opt}};let perr_cb;E.set_perr_cb=cb=>perr_cb=cb;E.perr=(id,info,opt,new_name)=>be_no_log.enabled(id)?null:etask((function*(){info=info||{};opt=opt||{};const bg_main=get_bg_module("be_bg_main");id=E.perr_id(id,new_name);if(conf.check_agree_ts&&!(bg_main&&bg_main.get("agree_ts")))return void zerr("no agree_ts, skip perr %s",id);let perr_opt=E.perr_opt(id,info,opt);if(zutil.is_mocha())return;let res=yield zerr.perr(id,perr_opt.info,perr_opt.opt);if(perr_cb)perr_cb(res);return res}));E.get_bext_config=()=>bext_config_cb?bext_config_cb():storage.get_json("bext_config_last");E.CG=(path,def)=>zutil.get(E.get_bext_config(),path,def);E.check_min_ver=min_ver=>svc_util.check_min_ver(E.version(),min_ver);E.check_min_install_ver=min_ver=>svc_util.check_min_install_ver(E.install_version()||E.version(),min_ver);E.check_min_install_ts=ts=>svc_util.check_min_install_ts(E.install_ts(),ts);E.check_min_tfi=tfi=>!tfi||Date.now()-E.install_ts()>tfi;E.is_conf_allowed=(on,id)=>{let random;if(!on)return false;id=id||"ext_rand_id";if(!(random=+storage.get(id)))storage.set(id,random=Math.random());return random<on};E.proxy_error_ui_enabled=type=>{const c=E.CG("proxy_error_ui",{});return!!(E.check_min_ver(c.min_ver)&&c[type])};E.set_hola_org_cookie=(name,value)=>chrome.cookies.set({url:`https://${www_host}`,domain:`.${www_host}`,name,value});E.del_hola_org_cookie=name=>{try{chrome.cookies.remove({url:`https://${www_host}`,name})}catch(e){console.error(`falied to rm ${www_host} cookes %s`,e)}};let now_cb;E.set_now_cb=cb=>now_cb=cb;E.now=()=>now_cb?now_cb():Date.now();E.get_dpi=()=>{try{let div=document.createElement("div");div.style.width="1in";document.body.appendChild(div);let ppi=document.defaultView.getComputedStyle(div,null).getPropertyValue("width");document.body.removeChild(div);return parseFloat(ppi)||96}catch(e){console.error("failed to get dpi %s",e);return 96}};E.set_full_browser_mode=value=>storage.set("full_browser_mode",value);E.full_browser_mode=()=>E.browser()=="hola"&&storage.get_json("full_browser_mode");E.init();return E}.apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__),__WEBPACK_AMD_DEFINE_RESULT__!==undefined&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__))},6331:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__);__webpack_require__.d(__webpack_exports__,{init:()=>init});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(4850);var react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);var react_dom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5380);var react_dom__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);var _bext_vpn_ui_page_lib_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(726);var _bext_vpn_ui_ui_lib_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(2075);var _util_url_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(5305);var _util_url_js__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_util_url_js__WEBPACK_IMPORTED_MODULE_4__);var _util_etask_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(6386);var _util_etask_js__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_util_etask_js__WEBPACK_IMPORTED_MODULE_5__);var _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(6357);var _bext_pub_util_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(7345);var _bext_pub_util_js__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(_bext_pub_util_js__WEBPACK_IMPORTED_MODULE_7__);
// LICENSE_CODE ZON
function _extends(){_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key]}}}return target};return _extends.apply(this,arguments)}function _slicedToArray(arr,i){return _arrayWithHoles(arr)||_iterableToArrayLimit(arr,i)||_unsupportedIterableToArray(arr,i)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(o,minLen){if(!o)return;if(typeof o==="string")return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}function _arrayLikeToArray(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _iterableToArrayLimit(arr,i){var _i=arr==null?null:typeof Symbol!=="undefined"&&arr[Symbol.iterator]||arr["@@iterator"];if(_i==null)return;var _arr=[];var _n=true;var _d=false;var _s,_e;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break}}catch(err){_d=true;_e=err}finally{try{if(!_n&&_i["return"]!=null)_i["return"]()}finally{if(_d)throw _e}}return _arr}function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}const useState=react__WEBPACK_IMPORTED_MODULE_0___default().useState,useEffect=react__WEBPACK_IMPORTED_MODULE_0___default().useEffect;const T=_bext_vpn_ui_ui_lib_js__WEBPACK_IMPORTED_MODULE_3__.Z.T;const REPORT_HASH="#report_issue";const Report_problem=()=>{const _useState=useState(false),_useState2=_slicedToArray(_useState,2),modal=_useState2[0],set_modal=_useState2[1];const _useState3=useState(""),_useState4=_slicedToArray(_useState3,2),url=_useState4[0],set_url=_useState4[1];const _useState5=useState(""),_useState6=_slicedToArray(_useState5,2),subj=_useState6[0],set_subj=_useState6[1];useEffect((()=>{const on_hash_change=()=>set_modal(window.location.hash==REPORT_HASH);window.addEventListener("hashchange",on_hash_change,false);on_hash_change();let qs=_util_url_js__WEBPACK_IMPORTED_MODULE_4___default().qs_parse(window.location.search.replace(/^\?/,""));set_url(qs.url);set_subj(qs.subj);return()=>window.removeEventListener("hashchange",on_hash_change)}),[]);const hide_modal=()=>window.location.hash="";return react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"section report-problem"},react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a",{className:"title",href:"#report_issue"},react__WEBPACK_IMPORTED_MODULE_0___default().createElement(T,null,"Report a problem")),modal&&react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bext_vpn_ui_page_lib_js__WEBPACK_IMPORTED_MODULE_2__.zv,{url,init_subj:subj,close_cb:hide_modal}))};let dev_mode_counter=0,dev_mode_first_ts=0;const About_details=()=>{const _useState7=useState(_bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_6__.Z.get_dev_mode()),_useState8=_slicedToArray(_useState7,2),dev_mode=_useState8[0],set_dev_mode=_useState8[1];const info=_bext_vpn_ui_ui_lib_js__WEBPACK_IMPORTED_MODULE_3__.Z.use_etask((()=>_bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_6__.Z.get_product_info()),[]);useEffect((()=>{const update=()=>set_dev_mode(_bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_6__.Z.get_dev_mode());_bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_6__.Z.on("dev_mode_changed",update);return()=>_bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_6__.Z.off("dev_mode_changed",update)}),[]);const on_title_click=()=>{let now=Date.now();if(!dev_mode_first_ts||now-dev_mode_first_ts>5e3){dev_mode_first_ts=now;dev_mode_counter=0}dev_mode_counter++;if(dev_mode_counter!=5)return;dev_mode_counter=0;dev_mode_first_ts=0;_bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_6__.Z.set_dev_mode(!dev_mode)};const send_email=e=>{_bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_6__.Z.perr("be_report_problem",{email:1},{with_log:true,rate_limit:{count:1}})};let s=dev_mode?" (Dev mode)":"";return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bext_vpn_ui_page_lib_js__WEBPACK_IMPORTED_MODULE_2__.$0,{title:T("About Hola")+s,on_click:on_title_click},info.map((line=>react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bext_vpn_ui_page_lib_js__WEBPACK_IMPORTED_MODULE_2__.PH,{key:line.name,label:T(line.name)+":"},line.value))),react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bext_vpn_ui_page_lib_js__WEBPACK_IMPORTED_MODULE_2__.PH,null,"Send email to ",react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bext_vpn_ui_ui_lib_js__WEBPACK_IMPORTED_MODULE_3__.Z.Link_mailto,{on_click:send_email})))};const About_layout=()=>{const get_user_info=()=>({user:_bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_6__.Z.get_user(),is_plus:_bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_6__.Z.get_is_premium()});const _useState9=useState(get_user_info()),_useState10=_slicedToArray(_useState9,2),user_info=_useState10[0],set_user_info=_useState10[1];useEffect((()=>{const update=()=>set_user_info(get_user_info());_bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_6__.Z.on("user_changed",update);return()=>_bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_6__.Z.off("user_changed",update)}),[]);return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bext_vpn_ui_page_lib_js__WEBPACK_IMPORTED_MODULE_2__.f6,_extends({},user_info,{title:T("About"),cls:"about"}),react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Report_problem,null),react__WEBPACK_IMPORTED_MODULE_0___default().createElement(About_details,null),react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bext_vpn_ui_page_lib_js__WEBPACK_IMPORTED_MODULE_2__.St,null))};const init=()=>_util_etask_js__WEBPACK_IMPORTED_MODULE_5___default()((function*(){yield(0,_bext_vpn_ui_page_lib_js__WEBPACK_IMPORTED_MODULE_2__.VV)();react_dom__WEBPACK_IMPORTED_MODULE_1___default().render(react__WEBPACK_IMPORTED_MODULE_0___default().createElement(About_layout,null),document.querySelector(".react-root"))}))},726:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$0:()=>Section,PH:()=>Label_line,St:()=>Legal_section,VV:()=>init_api,f6:()=>Page_layout,zv:()=>Report_problem_modal});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(4850);var react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);var react_dom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5380);var react_dom__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);var classnames__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(793);var classnames__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);var _util_url_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(5305);var _util_url_js__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_util_url_js__WEBPACK_IMPORTED_MODULE_3__);var _util_util_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(1291);var _util_util_js__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_util_util_js__WEBPACK_IMPORTED_MODULE_4__);var _util_etask_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(6386);var _util_etask_js__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_util_etask_js__WEBPACK_IMPORTED_MODULE_5__);var _bext_vpn_ui_ui_lib_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(2075);var _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(6357);var conf__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(9641);
// LICENSE_CODE ZON
function _slicedToArray(arr,i){return _arrayWithHoles(arr)||_iterableToArrayLimit(arr,i)||_unsupportedIterableToArray(arr,i)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(o,minLen){if(!o)return;if(typeof o==="string")return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}function _arrayLikeToArray(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _iterableToArrayLimit(arr,i){var _i=arr==null?null:typeof Symbol!=="undefined"&&arr[Symbol.iterator]||arr["@@iterator"];if(_i==null)return;var _arr=[];var _n=true;var _d=false;var _s,_e;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break}}catch(err){_d=true;_e=err}finally{try{if(!_n&&_i["return"]!=null)_i["return"]()}finally{if(_d)throw _e}}return _arr}function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}const useState=react__WEBPACK_IMPORTED_MODULE_0___default().useState,useEffect=react__WEBPACK_IMPORTED_MODULE_0___default().useEffect;const T=_bext_vpn_ui_ui_lib_js__WEBPACK_IMPORTED_MODULE_6__.Z.T,Btn=_bext_vpn_ui_ui_lib_js__WEBPACK_IMPORTED_MODULE_6__.Z.Btn;const www_host=conf__WEBPACK_IMPORTED_MODULE_8__.www_host;const Header=props=>{let logo_url=_bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_7__.Z.hola_url()+"/?utm_source=holaext&utm_content=settings";let cp_url=_bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_7__.Z.hola_url()+"/cp?utm_source=holaext&utm_content=settings";let login_url=_bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_7__.Z.hola_url()+"/signin?utm_source=holaext&utm_content=settings";let upgrade_url=_bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_7__.Z.plus_ref("ext_settings_upgrade");let logo_cls="logo "+(props.is_plus?"logo-plus":"logo-free");return react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"header"},react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"header-left"},react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"spacer"}),react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a",{className:logo_cls,target:"_blank",rel:"noopener noreferrer",href:logo_url})),react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"header-content"},react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"title"},props.title),!props.is_plus&&react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"upgrade-btn"},react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a",{target:"_blank",rel:"noopener noreferrer",href:upgrade_url},react__WEBPACK_IMPORTED_MODULE_0___default().createElement(T,null,"Upgrade to Premium")))),react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"header-right"},props.user&&react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a",{className:"user-name",target:"_blank",rel:"noopener noreferrer",href:cp_url},props.user.displayName),!props.user&&react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a",{className:"login-btn",target:"_blank",rel:"noopener noreferrer",href:login_url},"Sign in"),react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"spacer"})))};const Page_layout=({user,is_plus,title,cls,children,trial})=>react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:classnames__WEBPACK_IMPORTED_MODULE_2___default()("page-layout",cls)},react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Header,{user,is_plus,title}),react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"content"},children));const Section=props=>react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:classnames__WEBPACK_IMPORTED_MODULE_2___default()("section",props.cls)},react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"title",onClick:props.on_click},props.title),react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"card"},props.children));const Label_line=props=>react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label",{className:"label-line"},props.label&&react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"label-line-label"},props.label),react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"label-line-children"},props.children));const Modal=({action,title,on_close,children,className})=>react_dom__WEBPACK_IMPORTED_MODULE_1___default().createPortal(react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"page-layout"},react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:classnames__WEBPACK_IMPORTED_MODULE_2___default()("page-modal",className)},react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"page-modal-body"},react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"page-modal-title"},react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3",null,title),react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"icon-remove",title:T("Close"),onClick:on_close})),react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"page-modal-content"},children),action&&react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"page-modal-actions"},action)))),document.body);const Legal_section=props=>react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Section,{title:T("Legal")},react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Label_line,{label:T("Privacy Policy")},react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a",{href:_bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_7__.Z.hola_url()+"/legal/privacy"},"https://",www_host,"/legal/privacy")),react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Label_line,{label:T("End User License")},react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a",{href:_bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_7__.Z.hola_url()+"/legal/sla"},"https://",www_host,"/legal/sla")),props.children);const Report_problem_modal=({url,init_subj,close_cb})=>{useEffect((()=>void _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_7__.Z.perr("be_report_problem",{perr:1},{with_log:true,rate_limit:{count:1}})),[]);const _useState=useState(true),_useState2=_slicedToArray(_useState,2),valid_email=_useState2[0],set_valid_email=_useState2[1];const _useState3=useState((()=>_util_util_js__WEBPACK_IMPORTED_MODULE_4___default().get(_bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_7__.Z.get_user(),"emails.0.value",""))),_useState4=_slicedToArray(_useState3,2),email=_useState4[0],set_email=_useState4[1];const _useState5=useState(init_subj||""),_useState6=_slicedToArray(_useState5,2),subj=_useState6[0],set_subj=_useState6[1];const _useState7=useState(""),_useState8=_slicedToArray(_useState7,2),desc=_useState8[0],set_desc=_useState8[1];const _useState9=useState(""),_useState10=_slicedToArray(_useState9,2),error=_useState10[0],set_error=_useState10[1];const can_submit=desc&&subj&&email&&valid_email;useEffect((()=>{if(error&&can_submit)set_error("")}),[can_submit]);const verify_email=()=>set_valid_email(_util_url_js__WEBPACK_IMPORTED_MODULE_3___default().is_valid_email(email));const on_change=setter=>ev=>setter(ev.target.value);const send_click=()=>{if(!can_submit)return void set_error("Please fill all fields");_bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_7__.Z.send_issue_report({email,subj,desc,url});close_cb()};const send_report=react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Btn,{disabled:!can_submit,arrow:true,onClick:send_click},react__WEBPACK_IMPORTED_MODULE_0___default().createElement(T,null,"Send"));return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Modal,{title:T("Report a problem"),on_close:close_cb,action:send_report},react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:classnames__WEBPACK_IMPORTED_MODULE_2___default()("form-group",{"has-error":!valid_email})},react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input",{type:"text",placeholder:"Your e-mail",className:"form-control",onBlur:verify_email,value:email,onChange:on_change(set_email)}),!valid_email&&react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span",{className:"help-block"},react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img",{src:"./bext/vpn/ui/img/icon_warning.svg"})," ","Please enter a valid email.")),react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"form-group"},react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input",{type:"text",placeholder:"Subject",className:"form-control",value:subj,onChange:on_change(set_subj)})),react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"form-group"},react__WEBPACK_IMPORTED_MODULE_0___default().createElement("textarea",{placeholder:"Description",rows:"10",className:"form-control",onChange:on_change(set_desc)})),error&&react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"has-error"},react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span",{className:"help-block"},react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img",{src:"./bext/vpn/ui/img/icon_warning.svg"})," ",error)))};const init_api=()=>_util_etask_js__WEBPACK_IMPORTED_MODULE_5___default()((function*(){window.addEventListener("unload",uninit);yield _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_7__.Z.init()}));const uninit=()=>_bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_7__.Z.uninit()}}]);
//# sourceMappingURL=https://hola.org/be_source_map/1.201.134/331.bundle.js.map?build=nopeer