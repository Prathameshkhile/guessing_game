use wasm_bindgen::prelude::*;
use rand::Rng;

#[wasm_bindgen]
pub struct Game {
    secret: u32,
}

#[wasm_bindgen]
impl Game {
    #[wasm_bindgen(constructor)]
    pub fn new() -> Game {
        let secret = rand::thread_rng().gen_range(1..=100);
        Game { secret }
    }

    pub fn check_guess(&self, guess: u32) -> String {
        if guess < self.secret {
            "Too small!".to_string()
        } else if guess > self.secret {
            "Too big!".to_string()
        } else {
            "Correct!".to_string()
        }
    }
}
