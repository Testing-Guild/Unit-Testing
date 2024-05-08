package sum

import (
	"testing"
)

func TestSum(t *testing.T) {
	result := sum.Sum(2, 3)
	expected := 5

	if result != expected {
		t.Errorf("Sum(2, 3) expected %d, got %d", expected, result)
	}
}
