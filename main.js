var COLORS=["#19e3b1","#4cc9f0","#f5c542","#ff7a90","#a78bfa","#ff9f45"];
var S=[],pick=COLORS[0],KEY="study-subjects-v2";
{S=["محاسبة ضريبية (٢)","محاسبة مالية متقدمة","نظم محاسبة تكاليف","تحليل وتقييم الشركات","الإحصاء التطبيقي","الأعمال الإلكترونية"].map(function(n,i){return{id:"s"+i,name:n,color:COLORS[i],sections:[]}})}
var IMGS={b2:"img/b2.jpg",b3:"img/b3.jpg",b4:"img/b4.jpg",b5a:"img/b5a.jpg",b5b:"img/b5b.jpg",b6a:"img/b6a.jpg",b6b:"img/b6b.jpg",b7:"img/b7.jpg",st1:"img/st1.jpg",st2:"img/st2.jpg",st3:"img/st3.jpg",st4a:"img/st4a.jpg",st4b:"img/st4b.jpg",st4c:"img/st4c.jpg",st5:"img/st5.jpg",st7a:"img/st7a.jpg",st7b:"img/st7b.jpg",st6a:"img/st6a.jpg",st6b:"img/st6b.jpg",st6c:"img/st6c.jpg",st6d:"img/st6d.jpg",eb1:"img/eb1.jpg",eb2a:"img/eb2a.jpg",eb2b:"img/eb2b.jpg",eb2c:"img/eb2c.jpg",eb3a:"img/eb3a.jpg",eb3b:"img/eb3b.jpg",eb4:"img/eb4.jpg",eb5:"img/eb5.jpg",fa1:"img/fa1.jpg",fa2a:"img/fa2a.jpg",fa2b:"img/fa2b.jpg",fa2c:"img/fa2c.jpg",fa2d:"img/fa2d.jpg",fa4:"img/fa4.jpg",fa5a:"img/fa5a.jpg",fa5b:"img/fa5b.jpg",fa5c:"img/fa5c.jpg",fa5d:"img/fa5d.jpg",fa6a:"img/fa6a.jpg",fa6b:"img/fa6b.jpg",fa6c:"img/fa6c.jpg",fa6d:"img/fa6d.jpg",fa6e:"img/fa6e.jpg",fa7a:"img/fa7a.jpg",fa7b:"img/fa7b.jpg",fa7c:"img/fa7c.jpg",ct1:"img/ct1.jpg",ct2:"img/ct2.jpg",ct3:"img/ct3.jpg",ct4:"img/ct4.jpg",ct5:"img/ct5.jpg",ct6:"img/ct6.jpg"};
var tx=S.find(function(x){return x.id==="s0"||x.name.indexOf("ضريب")>-1});
if(tx){var sc=tx.sections.find(function(y){return y.id==="s0-sec2"});
if(!sc){tx.sections.push({id:"s0-sec2",name:"Section 2",done:false,img:"b2"})}else if(sc){sc.img="b2"}}
if(tx){tx.sections.push({id:"s0-sec3",name:"Section 3",done:false,img:"b3"})}
if(tx){tx.sections.push({id:"s0-sec4",name:"Section 4",done:false,img:"b4"})}
if(tx){tx.sections.push({id:"s0-sec5",name:"Section 5",done:false,img:"b5a,b5b"})}
if(tx){tx.sections.push({id:"s0-sec6",name:"Section 6",done:false,img:"b6a,b6b"})}
if(tx){tx.sections.push({id:"s0-sec7",name:"Section 7",done:false,img:"b7"})}
var st=S.find(function(x){return x.id==="s4"});if(st){st.sections.push({id:"s4-sec1",name:"Section 1",done:false,img:"st1"})}
if(st){st.sections.push({id:"s4-sec2",name:"Section 2",done:false,img:"st2"})}
if(st){st.sections.push({id:"s4-sec3",name:"Section 3",done:false,img:"st3"})}
if(st){st.sections.push({id:"s4-sec4",name:"Section 4",done:false,img:"st4a,st4b,st4c"})}
if(st){st.sections.push({id:"s4-sec5",name:"Section 5",done:false,img:"st5"})}
if(st){st.sections.push({id:"s4-sec6",name:"Section 6",done:false,img:"st6a,st6b,st6c,st6d"})}
if(st){st.sections.push({id:"s4-sec7",name:"Section 7",done:false,img:"st7a,st7b"})}
var eb=S.find(function(x){return x.id==="s5"});
if(eb){eb.sections.push({id:"s5-sec1",name:"Section 1",done:false,img:"eb1"})}
if(eb){eb.sections.push({id:"s5-sec2",name:"Section 2",done:false,img:"eb2a,eb2b,eb2c"})}
if(eb){eb.sections.push({id:"s5-sec3",name:"Section 3",done:false,img:"eb3a,eb3b"})}
if(eb){eb.sections.push({id:"s5-sec4",name:"Section 4",done:false,img:"eb4"})}
if(eb){eb.sections.push({id:"s5-sec5",name:"Section 5",done:false,img:"eb5"})}
var fa=S.find(function(x){return x.id==="s1"});
if(fa){fa.sections.push({id:"s1-sec1",name:"Section 1",done:false,img:"fa1"})}
if(fa){fa.sections.push({id:"s1-sec2",name:"Section 2",done:false,img:"fa2a,fa2b,fa2c,fa2d"})}
if(fa){fa.sections.push({id:"s1-sec4",name:"Section 4",done:false,img:"fa4"})}
if(fa){fa.sections.push({id:"s1-sec5",name:"Section 5",done:false,img:"fa5a,fa5b,fa5c,fa5d"})}
if(fa){fa.sections.push({id:"s1-sec6",name:"Section 6",done:false,img:"fa6a,fa6b,fa6c,fa6d,fa6e"})}
if(fa){fa.sections.push({id:"s1-sec7",name:"Section 7",done:false,img:"fa7a,fa7b,fa7c"})}
var ct=S.find(function(x){return x.id==="s2"});
if(ct){ct.sections.push({id:"s2-sec1",name:"Section 1",done:false,img:"ct1"})}
if(ct){ct.sections.push({id:"s2-sec2",name:"Section 2",done:false,img:"ct2"})}
if(ct){ct.sections.push({id:"s2-sec3",name:"Section 3",done:false,img:"ct3"})}
if(ct){ct.sections.push({id:"s2-sec4",name:"Section 4",done:false,img:"ct4"})}
if(ct){ct.sections.push({id:"s2-sec5",name:"Section 5",done:false,img:"ct5"})}
if(ct){ct.sections.push({id:"s2-sec6",name:"Section 6",done:false,img:"ct6",note:"المثال صفحة 202"})}
var RECS={};
RECS["s0-sec2"]=[{t:"شرح Section 2 (تسجيل صوتي)",src:"audio/sec2.mp4"}];
RECS["s0-sec3"]=[{t:"شرح Section 3 (تسجيل صوتي)",src:"audio/sec3.mp4"}];
RECS["s0-sec4"]=[{t:"شرح Section 4 (تسجيل صوتي)",src:"audio/sec4.mp4"}];
RECS["s0-sec5"]=[{t:"شرح Section 5 (تسجيل صوتي)",src:"audio/sec5.mp4"}];
RECS["s0-sec6"]=[{t:"شرح Section 6 (تسجيل صوتي)",src:"audio/sec6.mp4"}];
RECS["s0-sec7"]=[{t:"شرح Section 7 (تسجيل صوتي)",src:"audio/sec7.mp4"}];

var OPEN={},OPENX={};
function save(){}
function esc(t){return String(t).replace(/[&<>"]/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]})}
function uid(){return Date.now().toString(36)+Math.random().toString(36).slice(2,6)}
function render(){
  S.forEach(function(s){s.sections.sort(function(a,b){return (parseInt(a.name.replace(/\D/g,""))||0)-(parseInt(b.name.replace(/\D/g,""))||0)})});
  var all=0,done=0,g=document.getElementById("g");
  document.getElementById("pills").innerHTML=S.map(function(s,i){var n=s.sections.length,d=s.sections.filter(function(x){return x.done}).length,p=n?Math.round(d/n*100):0;return '<button type="button" class="bub" data-go="'+s.id+'" style="--c:'+s.color+';--p:'+p+';animation-duration:'+(3+(i%3)*.8)+'s;animation-delay:-'+(i*.7)+'s" aria-label="'+esc(s.name)+'"><span class="in">'+esc(s.name)+'</span></button>'}).join("");
  if(!S.length){g.innerHTML='<div class="empty" style="grid-column:1/-1">لسه مفيش مواد. اكتب اسم مادة فوق واضغط «إضافة مادة».</div>'}
  else g.innerHTML=S.map(function(s){
    var d=s.sections.filter(function(x){return x.done}).length,n=s.sections.length;
    all+=n;done+=d;
    var p=n?Math.round(d/n*100):0,o=OPEN[s.id];
    var body="";
    if(o){
      body='<div class="bod"><div class="bar"><i style="width:'+p+'%"></i></div>'+
      (n?'<p class="meta">'+d+' من '+n+' سكشن</p>':'<p class="meta">السكاشن هتتضاف هنا قريب.</p>')+
      '<ul>'+s.sections.map(function(x){
        var os=OPENX[x.id],det="";
        if(os){
          var rc=RECS[x.id]||[];
          det='<div class="det">'+(x.note?'<p class="note">'+esc(x.note)+'</p>':'')+(x.img?x.img.split(",").map(function(k){return IMGS[k]?'<img class="board" data-a="zoom" src="'+IMGS[k]+'" alt="شرح '+esc(x.name)+'">':""}).join(""):"")+
          rc.map(function(r){return '<div class="rec"><b>'+esc(r.t)+'</b><audio controls preload="none" src="'+r.src+'"></audio></div>'}).join("")+
          (!rc.length?'<p class="meta">مفيش تسجيل صوتي لسه.</p>':'')+'</div>';
        }
        return '<li class="'+(x.done?"done":"")+(os?" open":"")+'" data-sid="'+x.id+'"><div class="row"><input type="checkbox" data-a="tog" '+(x.done?"checked":"")+' aria-label="تم"><button class="sname" data-a="tgX" aria-expanded="'+(os?"true":"false")+'">'+esc(x.name)+'<span class="chev">◂</span></button></div>'+det+'</li>'
      }).join("")+'</ul></div>';
    }
    return '<div class="sc'+(o?" open":"")+'" id="sc-'+s.id+'" style="--c:'+s.color+'" data-id="'+s.id+'">'+
    '<button class="head" data-a="tgS" aria-expanded="'+(o?"true":"false")+'"><span class="ttl">'+esc(s.name)+'</span><b class="pc">'+p+'%</b><span class="chev">◂</span></button>'+body+'</div>'
  }).join("");
  var tp=all?Math.round(done/all*100):0;
  document.getElementById("tp").textContent=tp+"%";
  document.getElementById("tb").style.width=tp+"%";
}
document.getElementById("pills").onclick=function(e){var b=e.target.closest(".bub");if(!b)return;OPEN[b.dataset.go]=true;render();var c=document.getElementById("sc-"+b.dataset.go);if(!c)return;c.scrollIntoView({behavior:"smooth",block:"start"});c.classList.remove("flash");void c.offsetWidth;c.classList.add("flash")};
var g=document.getElementById("g");
g.onclick=function(e){
  var t=e.target.closest("[data-a]");if(!t)return;var a=t.dataset.a,card=t.closest(".sc");if(!card)return;
  var s=S.find(function(x){return x.id===card.dataset.id});
  if(a==="zoom"){document.getElementById("lbi").src=t.src;document.getElementById("lb").hidden=false;return}
  if(a==="tgS"){OPEN[s.id]=!OPEN[s.id];render();return}
  var li=t.closest("li"),sid=li.dataset.sid;
  if(a==="tgX"){OPENX[sid]=!OPENX[sid];render();return}
  if(a==="tog"){var x=s.sections.find(function(y){return y.id===sid});x.done=!x.done;save();render()}
};
render();
