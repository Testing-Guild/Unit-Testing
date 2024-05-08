package sum

import (
	"testing"
)

func sum(a int, b int) int {
	return a + b
}
func TestSum(t *testing.T) {
	result := sum(2, 3)
	expected := 5

	if result != expected {
		t.Errorf("Sum(2, 3) expected %d, got %d", expected, result)
	}
}
