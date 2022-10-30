//change 5 to the total number of questions
var total=10
var question=new Array()
for (i=1;i<=total+1;i++){
temp="choice"+i+"=new Array()"
eval(temp)
}
var solution=new Array()

/*Below lists the phrases that will be randomly displayed if the user correctly answers the question. You may extend or shorten this list as desired*/
var compliments=new Array()
compliments[0]="Hooray!"
compliments[1]="You Did It!"
compliments[2]="Great Job"
compliments[3]="Way to Go!"
compliments[4]="Good Work!"
compliments[5]="Tops"


/*Below lists the questions, its choices, and finally, the solution to each question. Folow the exact format below when editing the questions. You may have as many questions as needed. Check doc at http://javascriptkit.com/script/script2/comboquiz.htm for more info
*/

question[1]="What is the capital of Alabama?"
choice1[1]="Phoenix"
choice1[2]="Juneau"
choice1[3]="Montgomery"
choice1[4]="Little Rock"

question[2]="What is the capital of Alaska?"
choice2[1]="Juneau"
choice2[2]="Montgomery"
choice2[3]="Phoenix"
choice2[4]="Little Rock"

question[3]="What is the capital of Arizona?"
choice3[1]="Juneau"
choice3[2]="Phoenix"
choice3[3]="Little Rock"
choice3[4]="Sacramento"

question[4]="What is the capital of Arkansas?"
choice4[1]="Phoenix"
choice4[2]="Little Rock"
choice4[3]="Sacramento"
choice4[4]="Denver"

question[5]="What is the capital of California?"
choice5[1]="Little Rock"
choice5[2]="Hartford"
choice5[3]="Denver"
choice5[4]="Sacramento"

question[6]="What is the capital of Colorado?"
choice6[1]="Sacramento"
choice6[2]="Dover"
choice6[3]="Hartford"
choice6[4]="Denver"

question[7]="What is the capital of Connecticut?"
choice7[1]="Denver"
choice7[2]="Hartford"
choice7[3]="Dover"
choice7[4]="Tallahassee"

question[8]="What is the capital of Delaware?"
choice8[4]="Hartford"
choice8[2]="Dover"
choice8[3]="Tallahassee"
choice8[4]="Atlanta"

question[9]="What is the capital of Florida?"
choice9[1]="Tallahassee"
choice9[2]="Dover"
choice9[3]="Atlanta"
choice9[4]="Honolulu"

question[10]="What is the capital of Georgia?"
choice10[1]="Tallahassee"
choice10[2]="Honolulu"
choice10[3]="Atlanta"
choice10[4]="Boise"

solution[1]="c"
solution[2]="a"
solution[3]="b"
solution[4]="b"
solution[5]="d"
solution[6]="d"
solution[7]="b"
solution[8]="b"
solution[9]="a"
solution[10]="c"
