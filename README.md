# MakeCode Package for the Joy-IT SBC-OLED01

This library provides a Microsoft Makecode package for the Joy-IT SBC-OLED01. See https://joy-it.net/products/SBC-OLED01 for more details.

## Overview

This small 0.96 inch (approx. 2.44 cm) OLED display with SSD1306 controller works with an I2C interface, making it easy to use with Arduino, Raspberry Pi or other single-board computers or microcontrollers.

**The OLED display is connected via I2C on address 0x3C.**

## Connection

|      COM-EEPROM-32       |               Micro:Bit            |
|:------------------------:|:----------------------------------:|
| VCC                      | 3,3 V                              |
| SCL                      | P19 (SCL)                          |
| SDA                      | P20 (SDA)                          |
| GND                      | GND                                |

## Example

### Initialization

Because the display is an I2C-device, an initial initialization is required before use:

```typescript
// Initialize OLED display
SBCOLED01.oledInit()
```

### Display text and graphical elements
The display can show text as well as the graphical elements **line**, **rectangle**, and **circle**.

```typescript
// Show text
SBCOLED01.oledShowString("Hello World")
// Draw line from x-y coordinates 10-15 to x-y coordinates 60-60
SBCOLED01.oledDrawLine(10, 15, 60, 60)
// Draw rectangle starting at x-y coordinate 10-15 with a width of 20 and a height of 30
SBCOLED01.oledDrawRectangle(10, 15, 20, 30)
// Draw circle at x-y coordinate 50-50 with a radius of 20
SBCOLED01.oledDrawCircle(50, 50, 20)
```

### Clear display

All contents on the display can be erased by using the **SBCOLED01.oledClear()** function.

```typescript
// CLear output from display
SBCOLED01.oledClear()
```