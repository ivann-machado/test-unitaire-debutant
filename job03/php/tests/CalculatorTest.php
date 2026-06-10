<?php
use PHPUnit\Framework\TestCase;
use PHPUnit\Framework\Attributes\TestDox;

class CalculatorTest extends TestCase {
    private $calculator;

    protected function setUp(): void {
        $this->calculator = new Calculator();
    }
    
    #[TestDox('Adding 2 to 3 results in 5')]
    public function testAdd() {
        $this->assertEquals(5, $this->calculator->calculate('2 + 3'));
    }

    #[TestDox('Subtracting 2 from 3 results in 1')]
    public function testSubtract() {
        $this->assertEquals(1, $this->calculator->calculate('3 - 2'));
    }
    
    #[TestDox('Multiplying 2 by 3 results in 6')]
    public function testMultiply() {
        $this->assertEquals(6, $this->calculator->calculate('2 * 3'));
    }

    #[TestDox('Dividing 6 by 3 results in 2')]
    public function testDivide() {
        $this->assertEquals(2, $this->calculator->calculate('6 / 3'));
    }

    #[TestDox('Dividing 6 by 0 results in Exception')]
    public function testDivideByZero() {
        $this->expectException(RuntimeException::class);
        $this->calculator->calculate('6 / 0');
    }

    #[TestDox('Empty string results in empty string')]
    public function testEmptyString() {
        $this->assertEquals('', $this->calculator->calculate(''));
    }    
}