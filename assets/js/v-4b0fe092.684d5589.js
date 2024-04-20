"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[52665],{707637:(n,a,e)=>{e.r(a),e.d(a,{data:()=>s});const s=JSON.parse('{"key":"v-4b0fe092","path":"/advanced/support-new-devices/02_support_new_tuya_devices.html","title":"Support new TuYa devices","lang":"en-US","frontmatter":{"pageClass":"content-page"},"excerpt":"","headers":[{"level":2,"title":"Instructions","slug":"instructions","link":"#instructions","children":[{"level":3,"title":"1. Standard part of the setup","slug":"_1-standard-part-of-the-setup","link":"#_1-standard-part-of-the-setup","children":[]},{"level":3,"title":"2. Adding your device","slug":"_2-adding-your-device","link":"#_2-adding-your-device","children":[]},{"level":3,"title":"3. Understanding TuYa datapoints","slug":"_3-understanding-tuya-datapoints","link":"#_3-understanding-tuya-datapoints","children":[]},{"level":3,"title":"4. Mapping the datapoints","slug":"_4-mapping-the-datapoints","link":"#_4-mapping-the-datapoints","children":[]},{"level":3,"title":"6. BONUS: Contacting the manufacturer","slug":"_6-bonus-contacting-the-manufacturer","link":"#_6-bonus-contacting-the-manufacturer","children":[]},{"level":3,"title":"7. BONUS 2: Further reading","slug":"_7-bonus-2-further-reading","link":"#_7-bonus-2-further-reading","children":[]}]}],"git":{"updatedTime":1713606090000},"filePathRelative":"advanced/support-new-devices/02_support_new_tuya_devices.md"}')},992079:(n,a,e)=>{e.r(a),e.d(a,{default:()=>D});var s=e(166252);const t=(0,s.uE)('<h1 id="support-new-tuya-devices" tabindex="-1"><a class="header-anchor" href="#support-new-tuya-devices" aria-hidden="true">#</a> Support new TuYa devices</h1><p>TuYa devices use a custom <code>manuSpecificTuya</code> cluster, the instructions below will help you understand it better and provide some tools to ease discovery of their functions</p><h2 id="instructions" tabindex="-1"><a class="header-anchor" href="#instructions" aria-hidden="true">#</a> Instructions</h2><h3 id="_1-standard-part-of-the-setup" tabindex="-1"><a class="header-anchor" href="#_1-standard-part-of-the-setup" aria-hidden="true">#</a> 1. Standard part of the setup</h3>',4),o=(0,s.uE)('<h3 id="_2-adding-your-device" tabindex="-1"><a class="header-anchor" href="#_2-adding-your-device" aria-hidden="true">#</a> 2. Adding your device</h3><p>Adding support for TuYa devices is a bit different. In order to provide support for E.G. the <code>TS0601</code> model ID you would create the following external converter:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> fz <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;zigbee-herdsman-converters/converters/fromZigbee&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> tz <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;zigbee-herdsman-converters/converters/toZigbee&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> exposes <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;zigbee-herdsman-converters/lib/exposes&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> reporting <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;zigbee-herdsman-converters/lib/reporting&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> modernExtend <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;zigbee-herdsman-converters/lib/modernExtend&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> e <span class="token operator">=</span> exposes<span class="token punctuation">.</span>presets<span class="token punctuation">;</span>\n<span class="token keyword">const</span> ea <span class="token operator">=</span> exposes<span class="token punctuation">.</span>access<span class="token punctuation">;</span>\n<span class="token keyword">const</span> tuya <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;zigbee-herdsman-converters/lib/tuya&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> definition <span class="token operator">=</span> <span class="token punctuation">{</span>\n    <span class="token comment">// Since a lot of TuYa devices use the same modelID, but use different datapoints</span>\n    <span class="token comment">// it&#39;s necessary to provide a fingerprint instead of a zigbeeModel</span>\n    <span class="token literal-property property">fingerprint</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n        <span class="token punctuation">{</span>\n            <span class="token comment">// The model ID from: Device with modelID &#39;TS0601&#39; is not supported</span>\n            <span class="token comment">// You may need to add \\u0000 at the end of the name in some cases</span>\n            <span class="token literal-property property">modelID</span><span class="token operator">:</span> <span class="token string">&#39;TS0601&#39;</span><span class="token punctuation">,</span>\n            <span class="token comment">// The manufacturer name from: Device with modelID &#39;TS0601&#39; is not supported.</span>\n            <span class="token literal-property property">manufacturerName</span><span class="token operator">:</span> <span class="token string">&#39;_TZE200_d0yu2xgi&#39;</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token literal-property property">model</span><span class="token operator">:</span> <span class="token string">&#39;TS0601_new&#39;</span><span class="token punctuation">,</span>\n    <span class="token literal-property property">vendor</span><span class="token operator">:</span> <span class="token string">&#39;TuYa&#39;</span><span class="token punctuation">,</span>\n    <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">&#39;Fill in a description of the device here&#39;</span><span class="token punctuation">,</span>\n    <span class="token literal-property property">fromZigbee</span><span class="token operator">:</span> <span class="token punctuation">[</span>tuya<span class="token punctuation">.</span>fz<span class="token punctuation">.</span>datapoints<span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token literal-property property">toZigbee</span><span class="token operator">:</span> <span class="token punctuation">[</span>tuya<span class="token punctuation">.</span>tz<span class="token punctuation">.</span>datapoints<span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token literal-property property">onEvent</span><span class="token operator">:</span> tuya<span class="token punctuation">.</span>onEventSetTime<span class="token punctuation">,</span> <span class="token comment">// Add this if you are getting no converter for &#39;commandMcuSyncTime&#39;</span>\n    <span class="token literal-property property">configure</span><span class="token operator">:</span> tuya<span class="token punctuation">.</span>configureMagicPacket<span class="token punctuation">,</span>\n    <span class="token literal-property property">exposes</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n        <span class="token comment">// Here you should put all functionality that your device exposes</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token comment">// All datapoints go in here</span>\n        <span class="token literal-property property">tuyaDatapoints</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n        <span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token literal-property property">extend</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n        <span class="token comment">// A preferred new way of extending functionality.</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> definition<span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-understanding-tuya-datapoints" tabindex="-1"><a class="header-anchor" href="#_3-understanding-tuya-datapoints" aria-hidden="true">#</a> 3. Understanding TuYa datapoints</h3><p>The <code>dataReport</code>and <code>dataResponse</code> types of the <code>manuSpecificTuYa</code> cluster have their own format:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>    <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;seq&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">type</span><span class="token operator">:</span> DataType<span class="token punctuation">.</span>uint16<span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;dpValues&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">type</span><span class="token operator">:</span> BuffaloZclDataType<span class="token punctuation">.</span><span class="token constant">LIST_TUYA_DATAPOINT_VALUES</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>seq</code> is the transaction number of the payload. <code>dpValues</code> is an array of &quot;Data Points&quot; (type: <code>TuYaDataPointValue</code>). Such a datapoint value consists of:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>    <span class="token literal-property property">dp</span><span class="token operator">:</span> DataType<span class="token punctuation">.</span>uint8<span class="token punctuation">;</span>\n    <span class="token literal-property property">datatype</span><span class="token operator">:</span> DataType<span class="token punctuation">.</span>uint8<span class="token punctuation">;</span>\n    <span class="token literal-property property">data</span><span class="token operator">:</span> Buffer<span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>dp</code> is so called &quot;Data Point ID&quot; which is at the core of TuYa devices. From the point of view of a device the DPIDs are the functions that the device provides.</li><li><code>datatype</code> is the type of data contained in the <code>data</code> field, see <code>dataTypes</code> in <code>node_modules/zigbee-herdsman-converters/lib/tuya.js</code></li></ul><p>Some datapoints are &#39;report only&#39; (they report changes that happen within the device) others are &#39;issue and report&#39; (they can report by themselves, but also respond with a report when set). Data points are not unified across all TuYa devices so they can differ per device.</p><h3 id="_4-mapping-the-datapoints" tabindex="-1"><a class="header-anchor" href="#_4-mapping-the-datapoints" aria-hidden="true">#</a> 4. Mapping the datapoints</h3>',11),p=(0,s._)("code",null,"tuyaDatapoints",-1),i=(0,s._)("div",{class:"language-text line-numbers-mode","data-ext":"text"},[(0,s._)("pre",{class:"language-text"},[(0,s._)("code",null,"Zigbee2MQTT:debug 2022-11-30 18:29:19: Datapoint '106' with value '77' not defined for '_TZE200_d0yu2xgi'\n")]),(0,s._)("div",{class:"line-numbers","aria-hidden":"true"},[(0,s._)("div",{class:"line-number"})])],-1),r=(0,s._)("p",null,[(0,s.Uk)("Next we have to find out what this datapoint means ("),(0,s._)("code",null,"106"),(0,s.Uk)(" in this example), there are different ways to do this:")],-1),c={href:"https://github.com/Koenkk/zigbee-herdsman-converters/search?q=tuyaDatapoints",target:"_blank",rel:"noopener noreferrer"},l=(0,s._)("li",null,"Guess based on the value",-1),u=(0,s.uE)('<p>For this device we know that datapoint <code>106</code> is the humidity, we can now update the <code>exposes</code> and <code>tuyaDatapoints</code> section of the external converter:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>    <span class="token literal-property property">exposes</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n        e<span class="token punctuation">.</span><span class="token function">humidity</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// &lt;- added the humdity expose</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token literal-property property">tuyaDatapoints</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n            <span class="token punctuation">[</span><span class="token number">106</span><span class="token punctuation">,</span> <span class="token string">&#39;humidity&#39;</span><span class="token punctuation">,</span> tuya<span class="token punctuation">.</span>valueConverter<span class="token punctuation">.</span>raw<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// &lt;- mapped the datapoint</span>\n        <span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The values in the mapped datapoint are as follows:</p>',3),d=(0,s._)("li",null,[(0,s.Uk)("The datapoint ("),(0,s._)("code",null,"106"),(0,s.Uk)(" in this example)")],-1),k=(0,s._)("li",null,[(0,s.Uk)("The key under which this value should be published in the state ("),(0,s._)("code",null,"humidity"),(0,s.Uk)(" in this example)")],-1),v=(0,s._)("code",null,"tuya.valueConverter.raw",-1),h=(0,s._)("li",null,[(0,s.Uk)("If the value needs to be divided by 10 you can use "),(0,s._)("code",null,"tuya.valueConverter.divideBy10")],-1),m=(0,s._)("li",null,[(0,s.Uk)("If the value needs to be mapped to a string you can use "),(0,s._)("code",null,"tuya.valueConverterBasic.lookup({'single': 0, 'double': 1, 'hold': 2})")],-1),b=(0,s._)("code",null,"tuyaDatapoints",-1),y={href:"https://github.com/Koenkk/zigbee-herdsman-converters/blob/master/src/devices/tuya.ts",target:"_blank",rel:"noopener noreferrer"},g=(0,s._)("code",null,"tuya.ts",-1),f=(0,s._)("p",null,"Repeat this for all datapoints.",-1),_=(0,s._)("h3",{id:"_6-bonus-contacting-the-manufacturer",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#_6-bonus-contacting-the-manufacturer","aria-hidden":"true"},"#"),(0,s.Uk)(" 6. BONUS: Contacting the manufacturer")],-1),w=(0,s._)("p",null,"When contacting a manufacturer of TuYa compatible device DO NOT ask for Zigbee protocol of the device, they usually have no idea how the TuYa radio that they bought communicates over Zigbee. Instead ask for the UART protocol for their device, this should give you a better cooperation. You can also ask them about DPIDs and data formats for their functions.",-1),T=(0,s._)("h3",{id:"_7-bonus-2-further-reading",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#_7-bonus-2-further-reading","aria-hidden":"true"},"#"),(0,s.Uk)(" 7. BONUS 2: Further reading")],-1),x={href:"https://developer.tuya.com/en/docs/iot/device-development/access-mode-mcu/zigbee-general-solution/tuya-zigbee-module-uart-communication-protocol/tuya-zigbee-module-uart-communication-protocol?id=K9ear5khsqoty",target:"_blank",rel:"noopener noreferrer"},U={},D=(0,e(983744).Z)(U,[["render",function(n,a){const e=(0,s.up)("RouterLink"),U=(0,s.up)("ExternalLinkIcon");return(0,s.wg)(),(0,s.iD)("div",null,[t,(0,s._)("p",null,[(0,s.Uk)("Read through basic "),(0,s.Wm)(e,{to:"/advanced/support-new-devices/01_support_new_devices.html"},{default:(0,s.w5)((()=>[(0,s.Uk)("howto")])),_:1}),(0,s.Uk)(" for instructions on how to setup an external converter")]),o,(0,s._)("p",null,[(0,s.Uk)("Now we have to map the datapoints in "),p,(0,s.Uk)(". Start Zigbee2MQTT with "),(0,s.Wm)(e,{to:"/guide/usage/debug.html"},{default:(0,s.w5)((()=>[(0,s.Uk)("debug logging")])),_:1}),(0,s.Uk)(" enabled and trigger some actions on the device. You will now see logging like:")]),i,r,(0,s._)("ul",null,[(0,s._)("li",null,[(0,s.Wm)(e,{to:"/advanced/support-new-devices/03_find_tuya_data_points.html"},{default:(0,s.w5)((()=>[(0,s.Uk)("Find TuYa datapoint using the TuYa gateway")])),_:1}),(0,s.Uk)(" (easiest but requires TuYa gateway)")]),(0,s._)("li",null,[(0,s.Uk)("Check if an already supported TuYa device has this datapoint mapped ("),(0,s._)("a",c,[(0,s.Uk)("search"),(0,s.Wm)(U)]),(0,s.Uk)(")")]),l]),u,(0,s._)("ol",null,[d,k,(0,s._)("li",null,[(0,s.Uk)("The value converter, this converts the received value before publishing it ("),v,(0,s.Uk)(" in this example). There are more value converters available, examples: "),(0,s._)("ul",null,[h,m,(0,s._)("li",null,[(0,s.Uk)("For more examples search for "),b,(0,s.Uk)(" in "),(0,s._)("a",y,[g,(0,s.Wm)(U)]),(0,s.Uk)(".")])])])]),f,_,w,T,(0,s._)("p",null,[(0,s.Uk)("You can read more about how the device communicates with TuYa Zigbee radio module "),(0,s._)("a",x,[(0,s.Uk)("here"),(0,s.Wm)(U)])])])}]])}}]);