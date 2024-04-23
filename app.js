// write code here
        const array1 = [1, 2, 30, 400];
        const result = array1.map(num => num * 2);
        console.log(result); // [2, 4, 60, 800]

        const array2 = [1, 2, 3, 4];
        const result = array2.map(num => String(num));
        console.log(result); // ["1", "2", "3", "4"]

        const array3 = [1, '1', 2, {}];
        const result = array3.map(item => typeof item);
        console.log(result); // ["number", "string", "number", "object"]
