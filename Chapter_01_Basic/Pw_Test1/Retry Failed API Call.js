// Maximum retry attempts
const MAX_ATTEMPTS = 5;

// Attempt counter
let attempt = 0;
let success = false;

do {
    attempt++;

    // Simulate API call: success if random number > 0.6 (40% chance)
    let randomValue = Math.random();
    if (randomValue > 0.6) {
        console.log(`Attempt ${attempt}: ✅ SUCCESS (Response 200 OK)`);
        success = true; // API call succeeded
    } else {
        console.log(`Attempt ${attempt}: ❌ FAILED (Timeout/Error)`);
    }

} while (!success && attempt < MAX_ATTEMPTS);

// Final result
if (success) {
    console.log(`API call PASSED after ${attempt} attempt(s).`);
} else {
    console.log(`API call FAILED after ${MAX_ATTEMPTS} attempts.`);
}