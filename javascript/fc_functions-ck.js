$(document).ready(function(){function e(){targets="#h1_select, #h2_select, #p_select";defaultVarients="#h1_variant, #h2_variant, #p_variant";if(window.location.href.indexOf("?")!==-1){var e=$.getUrlVar("h1").replace(/\+/g," "),t=$.getUrlVar("h2").replace(/\+/g," "),n=$.getUrlVar("p").replace(/\+/g," ");defaultFonts=new Array(h1=e,h2=t,p=n)}else defaultFonts=new Array(h1="Ultra",h2="Trebuchet MS",p="Trebuchet MS");delay=2e3}function t(e){$(defaultVarients).remove();var t="http://fonts.googleapis.com/css?family=",n=$("#h1_select").children();$(targets).empty();for(var i=0,s=e.length;i<s;i+=1)if(e[i].subsets.indexOf("latin")!==-1){var o=e[i].family,u=e[i].family.replace(/\s+/g,"+"),a=e[i].family.replace(/\s+/g,"");$(targets).append('<option value="'+o+'">'+o+"</option>");$('<link rel="stylesheet" href="'+t+u+"&subset=latin&text="+a+'"  type="text/css" />').prependTo("head")}$(targets).append("<option>* System Fonts *</option>");$(targets).append(n);$("#h1_select option[selected], #h2_select option[selected], #p_select option[selected]").removeAttr("selected");$('#h1_select option[value="'+defaultFonts[0]+'"]').attr("selected","selected");$('#h2_select option[value="'+defaultFonts[1]+'"]').attr("selected","selected");$('#p_select option[value="'+defaultFonts[2]+'"]').attr("selected","selected");r();$("#h1_select_chzn .chzn-single").css("font-family",defaultFonts[0]);$("#h2_select_chzn .chzn-single").css("font-family",defaultFonts[1]);$("#p_select_chzn .chzn-single").css("font-family",defaultFonts[2])}function n(e){$(targets).change(function(){var t="http://fonts.googleapis.com/css?family=",n=$(this).val(),r=$(this).attr("id").split("_select")[0];$(r).css({"font-style":"normal","font-weight":"400"});$(this).siblings(".variant_select").remove();$("#"+r+"_variant_chzn").remove();_gaq.push(["_trackEvent","Font Choice",r,n]);for(var i=0;i<e.length;i++){var s=e[i].variants;if(e[i].family===n&&s.length>1){var o=s.toString();$('<link rel="stylesheet" href="'+t+n.replace(/\s+/g,"+")+":"+o+'&subset=latin" type="text/css" />').prependTo("head");$('<select class="variant_select" id="'+r+'_variant" name="'+r+'v"><select>').insertAfter("#"+r+"_select_chzn");for(var u=0;u<s.length;u++){var a=s[u].replace("italic"," italic");a==="regular"?$('<option value="400" selected>400</option>').appendTo("#"+r+"_variant"):a==="400"?$('<option value="'+a+'" selected>'+a+"</option>").appendTo("#"+r+"_variant"):a===" italic"?$('<option value="400 italic">400 italic</option>').appendTo("#"+r+"_variant"):$('<option value="'+a+'">'+a+"</option>").appendTo("#"+r+"_variant")}$(r).css("font-family",n).css("font-weight","400");$("#"+r+"_select_chzn .chzn-single").css("font-family",n);$(".variant_select").chosen();$("#"+r+"_variant_chzn li").each(function(){$(this).css("font-family",n);$(this).html().indexOf("italic")===-1?$(this).css("font-weight",$(this).html()):$(this).css("font-weight",$(this).html().split(" italic")[0]).css("font-style","italic")});$("#"+r+"_variant_chzn").css({"font-family":n,"min-width":"90px"});$("#"+r+"_variant_chzn div.chzn-drop").css("width","88px");$("#"+r+"_variant_chzn").find("input").css("width","53px");return!1}if(e[i].family===n){$("head style").after("<link rel='stylesheet' href='"+t+n.replace(/\s+/g,"+")+"&subset=latin' type='text/css'/>");$("#"+r+"_select_chzn .chzn-single").css("font-family",n)}}if(n==="Arial"||n==="Garamond"||n==="Georgia"||n==="Helvetica"||n==="Lucida Grande"||n==="Palatino"||n==="Tahoma"||n==="Times New Roman"||n==="Trebuchet MS"||n==="Verdana"){$("#"+r+"_select_chzn .chzn-single").css("font-family",n);$('<select class="variant_select" id="'+r+'_variant" name="'+r+'v"><option value="400" selected>400</option><option value="400 italic">400 italic</option><option value="bold">Bold</option><option value="bold italic">Bold italic</option><select>').insertAfter("#"+r+"_select_chzn");$("#"+r+"_variant").chosen();$("#"+r+"_variant_chzn").css({"font-family":n,"min-width":"90px"});$("#"+r+"_variant_chzn div.chzn-drop").css("width","88px");$("#"+r+"_variant_chzn").find("input").css("width","53px");$("#"+r+"_variant_chzn li").each(function(){$(this).css("font-family",n);$(this).html().indexOf("italic")===-1?$(this).css("font-weight",$(this).html()):$(this).css("font-weight",$(this).html().split(" italic")[0]).css("font-style","italic")})}$(r).css("font-family",n)});r()}function r(){$(targets).chosen();$(defaultVarients).chosen();$(".chzn-container").css("width","180px");$("#h1_select_chzn .active-result, #h2_select_chzn .active-result, #p_select_chzn .active-result").each(function(){$(this).css("font-family",$(this).html())});$(".chzn-search input").css("width","72%");$("#control_option").chosen();$("#control_option_chzn").css("width","90%");$("#control_option_chzn .chzn-drop").css("width","100%");$("#control_option_chzn .chzn-search").remove()}function i(){$(targets).change(function(){var e=$(this).val(),t=$(this).attr("id").split("_select")[0];$(t).css("font-family",e)});r()}function s(){$("body").on("change",".variant_select",function(){var e=$(this).attr("id").split("_variant")[0],t=$(this).val();if(t.indexOf(" italic")===-1){$(e).css("font-weight",t).css("font-style","normal");$("#"+e+"_variant_chzn .chzn-single").css("font-weight",t).css("font-style","normal")}else{$(e).css("font-weight",t.replace(" italic",""));$(e).css("font-style","italic");$("#"+e+"_variant_chzn .chzn-single").css({"font-weight":t.replace(" italic",""),"font-style":"italic"})}})}function o(){if($("body").width()>768){$("#h1color, #h2color, #pcolor").ColorPicker({onShow:function(){thisEl=$(this).attr("id");thisElem=thisEl.split("color")[0]},onChange:function(e,t,n,r){$("#"+thisEl).val(t);$(r).ColorPickerHide();$(".panel "+thisElem).css("color","#"+t)},onBeforeShow:function(){$(this).ColorPickerSetColor(this.value)}}).bind("keyup",function(){$(this).ColorPickerSetColor(this.value)});$("#bgcolor").ColorPicker({onShow:function(){thisEl=$(this).attr("id")},onChange:function(e,t,n,r){$("#"+thisEl).val(t);$(r).ColorPickerHide();$("#wrapper").css("background-color","#"+t)},onBeforeShow:function(){$(this).ColorPickerSetColor(this.value)}}).bind("keyup",function(){$(this).ColorPickerSetColor(this.value)})}else $("body").width()<=768&&$("#h1color, #h2color, #pcolor").on("change",function(){thisVal=$(this).val();thisEl=$(this).attr("id");thisElem=thisEl.split("color")[0];$(thisElem).css("color","#"+$(this).val())})}function u(e,t,n,r){$(e+" a").click(function(){var e=$(this).attr("href"),i=$(this);$(this).hasClass(t)||$("."+n+"."+t).fadeOut(r,function(){var n=$(".here").css("backgroundColor");$("."+t).removeClass(t);$(i).addClass(t);$(e).fadeIn(r,function(){$(this).addClass(t)})});return!1})}function a(){if(!document.getElementsByTagName)return;var e=document.getElementsByTagName("a");for(var t=0;t<e.length;t++){var n=e[t];n.getAttribute("href")&&n.getAttribute("rel")==="external"&&(n.target="_blank")}}function l(e){if(e.kind==="webfonts#webfontList"){t(e.items);n(e.items)}else noLove()}$("html").removeClass("no-js");$.extend({getUrlVars:function(){var e=[],t,n=window.location.href.slice(window.location.href.indexOf("?")+1).split("&");for(var r=0;r<n.length;r++){t=n[r].split("=");e.push(t[0]);e[t[0]]=t[1]}return e},getUrlVar:function(e){return $.getUrlVars()[e]}});e();$('<div class="element"> <label for="control_option">Element:</label> <select name="control_option" id="control_option"> <option value="h1">Headline (H1)</option> <option value="h2">Subhead (H2)</option> <option value="p">Body text (p)</option> <option value="bg">Background</option> </select> </div>').prependTo("#controls");s();$("#h1size, #h2size, #psize").on("change",function(){var e=$(this).attr("id").split("size")[0],t=$(this).val();$(e).css("font-size",t+"px");$(this).next("span.value").text(t)});$("#h1lh, #h2lh, #plh").on("change",function(){var e=$(this).attr("id").split("lh")[0],t=parseFloat($(this).val()).toFixed(2);$(e).css("line-height",$(this).val());$(this).next("span.value").text(t)});o();$("#h1_hide, #h2_hide, #p_hide").on("click",function(){var e=$(this).attr("id").split("_hide")[0];if($(this).val()==="Hide"){$(e).not("footer p").fadeOut("slow");$(this).val("Show")}else{$(e).fadeIn("slow");$(this).val("Hide")}});$("body").attr("spellcheck",!1);$("#control_option").on("change",function(){var e=$(this).val(),t="#"+e+"_sec";e==="all"?$(".control").each(function(){$(this).fadeIn()}):$(t).hasClass("active")||$(".control.active").fadeOut("fast",function(){$(".control.active").removeClass("active");$(t).fadeIn("fast",function(){$(this).addClass("active");$("#h1_select_chzn, #h2_select_chzn, #p_select_chzn, .chzn-drop").css("width","180px")})})});u("#panel_nav","here","panel","normal");a();var f=$.ajax({url:"https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyAc3a2WfPaSbA1B25u78zFQRfAide8T34c&sort=alpha&sort=desc",dataType:"jsonp",timeout:4e3,success:l});f.error(function(){$('<h2 class="warning">I&rsquo;m sorry, but we can&rsquo;t seem to reach Google Fonts.</h2>').prependTo("#font-combinator").delay(delay).fadeOut("slow");i()});$("#content_main h1, #content_main h2, #p_text p").on("click",function(){var e=this.nodeName.toLowerCase(),t="#"+e+"_sec";if(!$(t).hasClass("active")){$(".control.active").fadeOut("fast",function(){$(".control.active").removeClass("active");$(t).fadeIn("fast",function(){$(this).addClass("active");$("#h1_select_chzn, #h2_select_chzn, #p_select_chzn, .chzn-drop").css("width","180px")})});$("#control_option_chzn").fadeOut("fast",function(){e==="h1"?$("#control_option_chzn .chzn-single span").text("Headline (H1)"):e==="h2"?$("#control_option_chzn .chzn-single span").text("Subhead (H2)"):e==="p"&&$("#control_option_chzn .chzn-single span").text("Body text (p)")});$("#control_option_chzn").fadeIn("fast")}});$("#controls").submit(function(){console.log("submit button was hit");var e=$(this).serialize(),t="R_3a7d26b08ca81030043112b029d05978";$.ajax({url:"http://api.bit.ly/v3/shorten",dataType:"jsonp",data:"{'longUrl': http://font-combinator.loc/"+e+", 'apiKey':"+t+", 'login': chipcullen}",timeout:4e3,success:console.log("yay")});return!1})});