// const red = '빨간색';
// const blue = '파란색';
// function emphasize(texts, ...values){
//     let result = '';
//     for(let i=0; i<texts.length; i++){
//         result += texts[i] + (values[i]?`<b>${values[i]}</b>`:'');
//     }
//     console.log(result);
// }
// emphasize`제가 좋아하는 색은 ${red}과 ${blue}입니다.`

function StyledDiv(styles, ...fns){
    const color = 'red';
    let result = '';
    for(let i=0; i<styles.length; i++){
        result += styles[i] + (fns[i]?fns[i](color):'');
    }
    console.log(result);
}
StyledDiv`
    width: 200px;
    height: 10px;
    background: ${(value)=>value};
    border-radius: 50%;
    `