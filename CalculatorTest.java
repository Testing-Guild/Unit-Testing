import org.junit.jupiter.api.Test;

public class CalculatorTest {

  @Test
  public void testAddPositiveNumbers() {
    Calculator calc = new Calculator();
    int result = calc.add(2, 3);
    int expected = 5;
    org.junit.jupiter.api.Assertions.assertEquals(expected, result);
  }
}