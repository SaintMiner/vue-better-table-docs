import{B as y,r as F,t as d,a as C}from"./chunks/table-data.98a9390c.js";import{_ as u,o,d as h,w as _,r as t,a as p,c as A,k as s,p as a,b as m}from"./app.ebd20581.js";const g={components:{BaseExample:y,BetterTable:F},data(){return{tableStructure:d,tableData:C}},methods:{rowClick(n,l){alert(`index: ${l} | name: ${n.name}`)}}};function k(n,l,c,T,e,r){const i=t("BetterTable"),D=t("BaseExample");return o(),h(D,null,{default:_(()=>[p(i,{structure:e.tableStructure,data:e.tableData,onRowClick:r.rowClick},null,8,["structure","data","onRowClick"])]),_:1})}const x=u(g,[["render",k]]),f=s("h1",{id:"row-click",tabindex:"-1"},[a("Row click "),s("a",{class:"header-anchor",href:"#row-click","aria-hidden":"true"},"#")],-1),w=s("p",null,[a("Row clicking can be tracked by "),s("code",null,"@rowClick"),a(" event")],-1),E=s("h3",{id:"example",tabindex:"-1"},[a("Example "),s("a",{class:"header-anchor",href:"#example","aria-hidden":"true"},"#")],-1),b=s("p",null,"Click any row",-1),v=m(`<h3 id="vue-code" tabindex="-1">Vue code <a class="header-anchor" href="#vue-code" aria-hidden="true">#</a></h3><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-palenight has-highlighted-lines"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">&lt;!-- ... --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">BetterTable</span></span>
<span class="line"><span style="color:#89DDFF;">			</span><span style="color:#C792EA;">:structure</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">tableStructure</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">			</span><span style="color:#C792EA;">:data</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">tableData</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line highlighted"><span style="color:#89DDFF;">			</span><span style="color:#C792EA;">@rowClick</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">rowClick</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">		/&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">&lt;!-- ... --&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">/* ... */</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#F07178;">methods</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">		</span><span style="color:#F07178;">rowClick</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">row</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">index</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line highlighted"><span style="color:#F07178;">			</span><span style="color:#82AAFF;">alert</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">index: </span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">index</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;"> | name: </span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">row</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">}\`</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line highlighted"><span style="color:#F07178;">		</span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">/* ... */</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div>`,2),R=JSON.parse('{"title":"Row click","description":"","frontmatter":{},"headers":[{"level":3,"title":"Example","slug":"example","link":"#example","children":[]},{"level":3,"title":"Vue code","slug":"vue-code","link":"#vue-code","children":[]}],"relativePath":"row-click.md","lastUpdated":1673173226000}'),B={name:"row-click.md"},q=Object.assign(B,{setup(n){return(l,c)=>(o(),A("div",null,[f,w,E,b,p(x),v]))}});export{R as __pageData,q as default};
