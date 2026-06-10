<?php declare(strict_types=1);
use PHPUnit\Framework\TestCase;

class MathTest extends TestCase {
    public function testAddition() {
        $this->assertEquals(5, Math::addition(2, 3));
    }
}