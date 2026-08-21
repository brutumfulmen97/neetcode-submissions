impl Solution {
    pub fn eval_rpn(tokens: Vec<String>) -> i32 {
        let mut stack: Vec<String> = Vec::new();
        for token in tokens {
            match &token[..] {
                "+" | "-" | "*" | "/" => {
                    let a = stack.pop().unwrap().parse::<i32>().unwrap();
                    let b = stack.pop().unwrap().parse::<i32>().unwrap();
                    let result = match &token[..] {
                        "+" => b + a,
                        "-" => b - a,
                        "*" => b * a,
                        "/" => b / a,
                        _ => 0,
                    };
                    stack.push(result.to_string());
                }
                x => stack.push(x.to_string()),
            }
        }
        stack[0].parse::<i32>().unwrap()
    }
}
