//<![CDATA[
$("#LinkList1").each(function(){var e="<div class='pull-right' id='menu-button'><i aria-hidden='true' class='fa fa-bars'/></div><ul class='menu' id='nav'><li><ul class='sub-menu'>";$("#LinkList1 li").each(function(){var t=$(this).text(),n=t.substr(0,1),r=t.substr(1);"_"==n?(n=$(this).find("a").attr("href"),e+='<li><a href="'+n+'">'+r+"</a></li>"):(n=$(this).find("a").attr("href"),e+='</ul></li><li><a href="'+n+'">'+t+"</a><ul class='sub-menu'>")});e+="</ul></li></ul>";$(this).html(e);$("#LinkList1 ul").each(function(){var e=$(this);if(e.html().replace(/\s|&nbsp;/g,"").length==0)e.remove()});$("#LinkList1 li").each(function(){var e=$(this);if(e.html().replace(/\s|&nbsp;/g,"").length==0)e.remove()})});
$('.sub-menu').parent('li').children('a').addClass('has-sub');
//]]>
