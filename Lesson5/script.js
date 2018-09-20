function lesson5_Task1 () {
    let word = prompt("Enter the word: "),
        result = s => s.toUpperCase()==s.split('').reverse().join('').toUpperCase() ? "It's a palindrome" : "It's not a palindrome";
    alert(result(word));
};

function lesson5_Task2 () {
    let a = prompt('Enter the fist word'),
        b = prompt('Enter the second word'),
        result = (a,b) => a.toUpperCase().split('').sort().join('')==b.toUpperCase().split('').sort().join('') ? "It's a anagram" : "It's not a anagram";
    alert(result(a,b));
}

function lesson5_Task3 () {
    let str = prompt('Enter the text: ');
    function countVowels(a) {
        const arrVowels =  ['a','A','e','E','y','Y','u','U','i','I','o','O','а','А','у','У','е','Е','ё','Ё','ы','Ы','о','О','э','Э','я','Я','и','И'];
        let count = 0;
        for (let i = 0; i <= str.length-1; i++) {
            if (arrVowels.indexOf(str[i])>=0) {
                count++;
            }
        }
        return count;
    }
    alert('Text consists ' + countVowels(str) + ' vowels');
}

lesson5_Task1();
lesson5_Task2();
lesson5_Task3();


