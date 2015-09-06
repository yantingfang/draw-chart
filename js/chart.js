//author:闫亭芳
define(function(require,exports,module){
	exports.pieChart=function(data,width,height,cx,cy,r,colors,labels,lx,ly){
    	var svgns="http://www.w3.org/2000/svg";
    	var chart=document.createElementNS(svgns,"svg:svg");
    	chart.setAttribute("width",width);
    	chart.setAttribute("height",height);
    	chart.setAttribute("viewBox","0 0 "+width+" "+height);
    	var total=0;
    	for(var i=0;i<data.length;i++) total+=data[i];
    	var angles=[];
    
        for(var i=0;i<data.length;i++) angles[i]=data[i]/total*Math.PI*2;
           
        
       
        var endangle=0,n=30,j=1;
        var time=setInterval(function(){
    	var startangle=0;
        if(j<15)j=j+1;
        else j=j+3;
        //使饼图动起来
    	for(var i=0;i<data.length;i++){
        	endangle=startangle+angles[i]/n*j;
        	var x1=cx+r*Math.sin(startangle);
        	var y1=cy-r*Math.cos(startangle);
        	var x2=cx+r*Math.sin(endangle);
        	var y2=cy-r*Math.cos(endangle);
            var big=(endangle-startangle>Math.PI)?1:0;//big为1时，画大弧；big为0时，画小弧
        	var path=document.createElementNS(svgns,"path");
            var d="M "+cx+","+cy+" L "+x1+","+y1+" A "+r+","+r+" 0 "+big+" 1 "+x2+","+y2+" Z";
            path.setAttribute("d",d);
            path.setAttribute("fill",colors[i]);
            path.setAttribute("stroke","black");
            path.setAttribute("stroke-width","2");
            chart.appendChild(path);
            startangle=endangle;
        } if(endangle.toFixed(2)==(Math.PI*2).toFixed(2)){clearInterval(time);}},30);
        
        for(var i=0;i<data.length;i++){
            //绘制小方块表示图例
            var icon=document.createElementNS(svgns,"rect");
            icon.setAttribute("x",lx);
            icon.setAttribute("y",ly+30*i);
            icon.setAttribute("width",20);
            icon.setAttribute("height",20);
            icon.setAttribute("fill",colors[i]);
            icon.setAttribute("stroke","black");
            icon.setAttribute("stroke-width","2");
            chart.appendChild(icon);
             //添加图例标签
            var label=document.createElementNS(svgns,"text");
            label.setAttribute("x",lx+30);
            label.setAttribute("y",ly+30*i+18);
            label.setAttribute("font-family","sans-serif");
            label.setAttribute("font-size","16");
            label.appendChild(document.createTextNode(labels[i]));
            chart.appendChild(label);
        }
       
        return chart;
    }
    exports.pieCircle=function(data,width,height,cx,cy,r1,r2,colors,labels,lx,ly){
        var svgns="http://www.w3.org/2000/svg";
        var chart=document.createElementNS(svgns,"svg:svg");
        chart.setAttribute("width",width);
        chart.setAttribute("height",height);
        chart.setAttribute("viewBox","0 0 "+width+" "+height);
        var total=0;
        for(var i=0;i<data.length;i++) total+=data[i];
        var angles=[];
        for(var i=0;i<data.length;i++) angles[i]=data[i]/total*Math.PI*2;
        var endangle=0,n=30,j=1;
        var time=setInterval(function(){
        var startangle=0;
        if(j<15)j=j+1;
        else j=j+3;
        //使饼图动起来
        for(var i=0;i<data.length;i++){
            endangle=startangle+angles[i]/n*j;
            var startx1=cx+r2*Math.sin(startangle);
            var starty1=cy-r2*Math.cos(startangle);
            var x1=cx+r1*Math.sin(startangle);
            var y1=cy-r1*Math.cos(startangle);
            var x2=cx+r1*Math.sin(endangle);
            var y2=cy-r1*Math.cos(endangle);
            var endx2=cx+r2*Math.sin(endangle);
            var endy2=cy-r2*Math.cos(endangle);
            var big=(endangle-startangle>Math.PI)?1:0;//big为1时，画大弧；big为0时，画小弧
            var path=document.createElementNS(svgns,"path");
            var d="M "+startx1+","+starty1+" L "+x1+","+y1+" A "+r1+","+r1+" 0 "+big+" 1 "+x2+","+y2+" L "+endx2+","+endy2+" A "+r2+","+r2+" 0 "+big+" 0 "+startx1+","+starty1+" Z";
            path.setAttribute("d",d);
            path.setAttribute("fill",colors[i]);
            path.setAttribute("stroke","black");
            path.setAttribute("stroke-width","2");
            chart.appendChild(path);
            startangle=endangle;
        } if(endangle.toFixed(2)==(Math.PI*2).toFixed(2)){clearInterval(time);}},30);
        
        for(var i=0;i<data.length;i++){
            //绘制小方块表示图例
            var icon=document.createElementNS(svgns,"rect");
            icon.setAttribute("x",lx);
            icon.setAttribute("y",ly+30*i);
            icon.setAttribute("width",20);
            icon.setAttribute("height",20);
            icon.setAttribute("fill",colors[i]);
            icon.setAttribute("stroke","black");
            icon.setAttribute("stroke-width","2");
            chart.appendChild(icon);
             //添加图例标签
            var label=document.createElementNS(svgns,"text");
            label.setAttribute("x",lx+30);
            label.setAttribute("y",ly+30*i+18);
            label.setAttribute("font-family","sans-serif");
            label.setAttribute("font-size","16");
            label.appendChild(document.createTextNode(labels[i]));
            chart.appendChild(label);
        }
       
        return chart;
    }
});