// write code here
        const array = [1, 2, 30, 400];
        const result = array.map(num => num * 2);
        console.log(result); // [2, 4, 60, 800]

        const array = [1, 2, 3, 4];
        const result = array.map(num => String(num));
        console.log(result); // ["1", "2", "3", "4"]

        const array = [1, '1', 2, {}];
        const result = array.map(item => typeof item);
        console.log(result); // ["number", "string", "number", "object"]
