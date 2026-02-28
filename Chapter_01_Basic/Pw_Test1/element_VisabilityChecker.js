// Sample input
let isPresent = true;
let isDisplayed = true;
let isEnabled = false;

// Determine element status
let status = "";
if (isPresent === false) {
    status = "NOT FOUND";
} else if (isDisplayed === false) {
    status = "HIDDEN";
} else if (isEnabled === false) {
    status = "DISABLED";
} else {
    status = "READY";
}

// Determine severity using ternary operator
let severity = (isPresent === false) ? "CRITICAL" :
               (isDisplayed === false || isEnabled === false) ? "WARNING" :
               "OK";

// Determine QA action
let action = "";
if (status === "NOT FOUND") {
    action = "Element not present in DOM. Check selector or page load.";
} else if (status === "HIDDEN") {
    action = "Element is in DOM but hidden. Wait for visibility or scroll into view.";
} else if (status === "DISABLED") {
    action = "Element is visible but disabled. Wait for enable state or check preconditions.";
} else if (status === "READY") {
    action = "Element is ready for interaction. Proceed with action.";
}

// Print result
console.log(`Status: ${status}`);
console.log(`Severity: ${severity}`);
console.log(`Action: ${action}`);