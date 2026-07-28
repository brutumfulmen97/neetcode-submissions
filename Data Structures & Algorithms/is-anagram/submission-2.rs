use std::collections::HashMap;
impl Solution {
    pub fn is_anagram(s: String, t: String) -> bool {
        let mut map = HashMap::new();

        for char in s.chars() {
            map.entry(char).and_modify(|count| *count += 1).or_insert(1);
        }
        for char in t.chars() {
            if map.get(&char).is_none() {
                return false;
            }
            map.entry(char).and_modify(|count| *count -= 1);
        }
        let mut result = true;
        map.iter().for_each(|(_, count)| {
            if *count != 0 {
                result = false;
            }
        });
        result
    }
}

