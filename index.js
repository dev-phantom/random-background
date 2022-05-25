let body, colors, choice, demo;
change.onclick = () =>{
    body = document.getElementsByTagName('Body')[0];
    
    colors = ['gainsboro','lightgray','silver','darkgray','gray','dimgray','black','cornsilk','#FA6800','bisque'
                ,'wheat','steel','tan','rosybrown','goldenrod','peru','chocolate','sienna','brown','maroon','indianred'
                ,'red','blue','green','white','pink','hotpink','orangered','violet','purple','darkviolet'];
    choice = Math.floor(Math.random()* colors.length);
    body.style.backgroundColor = colors[choice];
    if (colors[choice] == 'black') {
        body.style.color = 'white';
    }
    demo = document.getElementById('demo');
    demo.innerHTML = (colors[choice]);
    
}