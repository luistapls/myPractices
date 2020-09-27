!function(e){var n={};function t(a){if(n[a])return n[a].exports;var i=n[a]={i:a,l:!1,exports:{}};return e[a].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=e,t.c=n,t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:a})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(t.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)t.d(a,i,function(n){return e[n]}.bind(null,i));return a},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";t.r(n);var a=()=>'\n  <div class="Error404">\n      <h2>Error 404</h2>\n  </div>\n  ';var i=()=>"/"+window.location.hash.slice(1).toLocaleLowerCase();var o=()=>{const e=document.getElementById("myForm");e.addEventListener("submit",n=>{n.preventDefault();const t=new FormData(e);fetch("http://localhost:3000/create",{method:"POST",body:t})})};var r=async e=>{const n=e.get("IDType"),t=Number(e.get("IDNumber")),a=await fetch("http://localhost:3000/api/workers"),i=(await a.json()).results.find(e=>e.IDType===n&&e.IDNumber===t),o=await fetch(i.url);return await o.json()};var l=async()=>{const e=await fetch("http://localhost:3000/api/workers"),n=(await e.json()).results;return await Promise.all(n.map(async e=>{const n=await fetch(e.url);return await n.json()}))};var d=async e=>{let n;switch(e.get("typeRead")){case"one":n=await r(e);break;case"all":n=await l()}return n};var s=async e=>{const{names:n,lastNames:t,IDType:a,IDNumber:i,phoneNumbers:o,email:r,dateAdmission:l,monthlySalary:d}=e;return`\n    <div>\n      <p>Nombres: ${n}</p>\n      <p>Apellidos: ${t}</p>\n      <p>Tipo de identificación: ${a}</p>\n      <p>Número de identificación: ${i}</p>\n      <p>Números de telefonos: ${o.join(" / ")}</p>\n      <p>Correo electronico: ${r}</p>\n      <p>Fecha de admisión: ${l}</p>\n      <p>Salario mensual: ${d}</p>\n    </div>\n  `};var m=async e=>{document.getElementById("app").innerHTML=await s(e)};var c=e=>{const n=document.getElementById("app");n.innerHTML="",e.forEach(async e=>{const t=await s(e);n.innerHTML+=t})};var p=async e=>Array.isArray(e)?c(e):m(e);var u=()=>{const e=document.getElementById("myForm");e.addEventListener("submit",async n=>{n.preventDefault();const t=new FormData(e),a=await d(t);await p(a)})};var b=async e=>{const{names:n,lastNames:t,IDType:a,IDNumber:i,phoneNumbers:o,email:r,dateAdmission:l,monthlySalary:d}=e;let s,m;switch(a){case"cc":s="selected";break;case"nit":m="selected"}const c=new Date(l).toISOString().slice(0,10);return`\n  <form class="form" id="myFormUpdate">\n    <div>\n      <label for="names">Nombres</label>\n      <input type="text" name="names" id="names" value="${n}"/>\n    </div>\n\n    <div>\n      <label for="lastNames">Apellidos</label>\n      <input type="text" name="lastNames" id="lastNames" value="${t}"/>\n    </div>\n\n    <div>\n      <label for="IDType">Tipo de Identificación</label>\n      <select name="IDType" id="IDType">\n        <option value="nit" ${m}>nit</option>\n        <option value="cc" ${s}>cc</option>\n      </select>\n    </div>\n\n    <div>\n      <label for="IDNumber">Numero de Identificación</label>\n      <input type="number" name="IDNumber" id="IDNumber" value="${i.toString()}"/>\n    </div>\n\n    <div>\n      <label for="phones">Números Telefónicos</label>\n      <input type="number" name="phone1" id="phones" value="${o[0]}"/>\n      <input type="number" name="phone2" id="phones" value="${o[1]}"/>\n      <input type="number" name="phone3" id="phones" value="${o[2]}"/>\n    </div>\n\n    <div>\n      <label for="email">Correo electrónico</label>\n      <input type="email" name="email" id="email" value="${r}"/>\n    </div>\n    \n    <div>\n      <label for="dateAdmission">Fecha de ingreso</label>\n      <input type="date" name="dateAdmission" id="dateAdmission" value="${c}"/>\n    </div>\n\n    <div>\n      <label for="monthlySalary">Salario mensual</label>\n      <input type="number" name="monthlySalary" id="monthlySalary" value="${d}"/>\n    </div>\n    \n    <div>\n      <button type="submit">Aceptar</button>\n      <button type="reset">Cancelar</button>\n    </div>\n    \n</form>\n  `};var y=()=>{const e=document.getElementById("app"),n=document.getElementById("myForm");n.addEventListener("submit",async t=>{t.preventDefault();const a=new FormData(n),i=await r(a),o=await b(i);e.innerHTML=o;const l=document.getElementById("myFormUpdate");l.addEventListener("submit",async e=>{e.preventDefault();const n=new FormData(l);n.append("_id",i._id),fetch("http://localhost:3000/update",{method:"POST",body:n})})})};var v=()=>{const e=document.getElementById("myForm");e.addEventListener("submit",async n=>{n.preventDefault();const t=new FormData(e);fetch("http://localhost:3000/delete",{method:"POST",body:t})})};const f={"/":async()=>"","/create":async()=>'\n  <form class="form" id="myForm">\n    <div>\n      <label for="names">Nombres</label>\n      <input type="text" name="names" id="names"/>\n    </div>\n\n    <div>\n      <label for="lastNames">Apellidos</label>\n      <input type="text" name="lastNames" id="lastNames"/>\n    </div>\n\n    <div>\n      <label for="IDType">Tipo de Identificación</label>\n      <select name="IDType" id="IDType">\n        <option value="nit">nit</option>\n        <option value="cc">cc</option>\n      </select>\n    </div>\n\n    <div>\n      <label for="IDNumber">Numero de Identificación</label>\n      <input type="number" name="IDNumber" id="IDNumber/>\n    </div>\n    \n    <div>\n      <label for="phones">Números Telefónicos</label>\n      <input type="number" name="phone1" id="phones"/>\n      <input type="number" name="phone2" id="phones"/>\n      <input type="number" name="phone3" id="phones"/>\n    </div>\n\n    <div>\n      <label for="email">Correo electrónico</label>\n      <input type="email" name="email" id="email"/>\n    </div>\n    \n    <div>\n      <label for="dateAdmission">Fecha de ingreso</label>\n      <input type="date" name="dateAdmission" id="dateAdmission"/>\n    </div>\n\n    <div>\n      <label for="monthlySalary">Salario mensual</label>\n      <input type="number" name="monthlySalary" id="monthlySalary"/>\n    </div>\n    \n    <div>\n      <button type="submit">Aceptar</button>\n      <button type="reset">Cancelar</button>\n    </div>\n</form>\n  ',"/read":async()=>'\n  <form id="myForm">\n      <div>\n        <label>\n          <input type="radio" name="typeRead" value="all" />\n          Leer los datos de todos los trabajadores.\n        </label>\n      </div>\n\n      <div>\n        <label>\n          <input type="radio" name="typeRead" value="one" />\n          Leer los datos de un trabajador.\n        </label>\n      </div>\n\n      <div>\n        <label for="">Tipo de Identificación</label>\n        <select name="IDType" id="">\n          <option value="nit">nit</option>\n          <option value="cc">cc</option>\n        </select>\n      </div>\n\n      <div>\n        <label for="">Numero de Identificación</label>\n        <input type="number" name="IDNumber" />\n      </div>\n\n      <div>\n        <button type="submit">Aceptar</button>\n        <button type="reset">Cancelar</button>\n      </div>\n    </form>\n  ',"/update":async()=>'\n    <form id="myForm">\n      <div>\n        <label for="">Tipo de Identificación</label>\n        <select name="IDType" id="">\n          <option value="nit">nit</option>\n          <option value="cc">cc</option>\n        </select>\n      </div>\n      \n      <div>\n        <label for="">Numero de Identificación</label>\n        <input type="number" name="IDNumber" />\n      </div>\n\n      <div>\n        <button type="submit">Aceptar</button>\n        <button type="reset">Cancelar</button>\n      </div>\n    </form>\n  ',"/delete":async()=>'\n    <form id="myForm">\n      <div>\n        <label for="">Tipo de Identificación</label>\n        <select name="IDType" id="">\n          <option value="nit">nit</option>\n          <option value="cc">cc</option>\n        </select>\n      </div>\n      \n      <div>\n        <label for="">Numero de Identificación</label>\n        <input type="number" name="IDNumber" />\n      </div>\n\n      <div>\n        <button type="submit">Aceptar</button>\n        <button type="reset">Cancelar</button>\n      </div>\n    </form>\n  '};var h=async()=>{const e=document.getElementById("app"),n=i(),t=f[n]?f[n]:a;switch(e.innerHTML=await t(),n){case"/create":o();break;case"/read":u();break;case"/update":y();break;case"/delete":v()}};window.addEventListener("load",h),window.addEventListener("hashchange",h)}]);