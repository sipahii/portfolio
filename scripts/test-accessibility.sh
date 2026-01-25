#!/bin/bash

# Accessibility Testing Script
# Run this before deploying to production

echo "🔍 Running Accessibility Tests..."
echo ""

# Colors for output
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Test counter
PASSED=0
FAILED=0

# Function to print test results
print_result() {
    if [ $1 -eq 0 ]; then
        echo -e "${GREEN}✅ PASSED${NC}: $2"
        ((PASSED++))
    else
        echo -e "${RED}❌ FAILED${NC}: $2"
        ((FAILED++))
    fi
}

# Test 1: Check if skip link exists
echo "Test 1: Skip to content link..."
if grep -q 'Skip to main content' src/components/SkipToContent.tsx; then
    print_result 0 "Skip to content link found"
else
    print_result 1 "Skip to content link missing"
fi

# Test 2: Check for main landmark
echo ""
echo "Test 2: Main landmark..."
if grep -q 'id="main-content"' src/app/layout.tsx; then
    print_result 0 "Main content landmark exists"
else
    print_result 1 "Main content landmark missing"
fi

# Test 3: Check for lang attribute
echo ""
echo "Test 3: HTML lang attribute..."
if grep -q 'lang="en"' src/app/layout.tsx; then
    print_result 0 "HTML lang attribute set"
else
    print_result 1 "HTML lang attribute missing"
fi

# Test 4: Check for prefers-reduced-motion
echo ""
echo "Test 4: Prefers-reduced-motion support..."
if grep -q 'prefers-reduced-motion' src/app/globals.css; then
    print_result 0 "Prefers-reduced-motion supported"
else
    print_result 1 "Prefers-reduced-motion not implemented"
fi

# Test 5: Check for focus-visible styles
echo ""
echo "Test 5: Focus indicators..."
if grep -q 'focus-visible' src/app/globals.css; then
    print_result 0 "Focus-visible styles implemented"
else
    print_result 1 "Focus-visible styles missing"
fi

# Test 6: Check for ARIA landmarks
echo ""
echo "Test 6: ARIA landmarks..."
if grep -q 'role="contentinfo"' src/app/layout.tsx; then
    print_result 0 "Footer landmark present"
else
    print_result 1 "Footer landmark missing"
fi

# Test 7: Check Navigation accessibility
echo ""
echo "Test 7: Navigation accessibility..."
if grep -q 'aria-label.*navigation' src/components/Navigation.tsx; then
    print_result 0 "Navigation has proper ARIA labels"
else
    print_result 1 "Navigation ARIA labels missing"
fi

# Test 8: Check for FocusManager
echo ""
echo "Test 8: Focus management..."
if [ -f "src/components/FocusManager.tsx" ]; then
    print_result 0 "FocusManager component exists"
else
    print_result 1 "FocusManager component missing"
fi

# Test 9: Check for semantic headings
echo ""
echo "Test 9: Semantic structure..."
if grep -q 'aria-labelledby' src/app/page.tsx; then
    print_result 0 "Sections use aria-labelledby pattern"
else
    print_result 1 "Sections missing aria-labelledby"
fi

# Test 10: Check for alt text pattern in README
echo ""
echo "Test 10: Documentation..."
if [ -f "ACCESSIBILITY_GUIDE.md" ]; then
    print_result 0 "Accessibility documentation exists"
else
    print_result 1 "Accessibility documentation missing"
fi

# Summary
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo -e "${GREEN}Passed: $PASSED${NC} | ${RED}Failed: $FAILED${NC}"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

if [ $FAILED -eq 0 ]; then
    echo -e "${GREEN}🎉 All accessibility tests passed!${NC}"
    echo ""
    echo "Next steps:"
    echo "1. Test with keyboard navigation (unplug mouse)"
    echo "2. Test with NVDA (Windows) or VoiceOver (Mac)"
    echo "3. Run Lighthouse accessibility audit"
    echo "4. Check color contrast in DevTools"
    exit 0
else
    echo -e "${RED}⚠️  Some tests failed. Please fix before deploying.${NC}"
    echo ""
    echo "See ACCESSIBILITY_GUIDE.md for implementation details"
    exit 1
fi
