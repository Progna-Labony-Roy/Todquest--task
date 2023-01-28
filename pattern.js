//Q.5.Write a program to display this pattern 

let n = 6;

for(let i = 1; i <= n; i++){
    let output = "";
    for(let j = 0; j <= n - i; j++){
        if(i == 1){
            output += "*";
        } else {
            if(j == 0 || j == n - i){
                output += "*";
            } else {
                output += " ";
            }
        }
    }
    console.log(output);
}