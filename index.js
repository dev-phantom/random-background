
change.onclick = () =>{
    let body = document.getElementsByTagName('Body')[0];
    let colors = ['gainsboro','lightgray','silver','darkgray','gray','dimgray','black','cornsilk','#FA6800','bisque'
                ,'wheat','steel','tan','rosybrown','goldenrod','peru','chocolate','sienna','brown','maroon','indianred'
                ,'red','blue','green','white','pink','hotpink','orangered','violet','purple','darkviolet'];
    let choice = Math.floor(Math.random()* colors.length);
    body.style.backgroundColor = colors[choice];
    if (colors[choice] == 'black') {
        body.style.color = 'white';
    }
    console.log(choice)
    
}