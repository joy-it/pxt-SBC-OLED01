// Initialize OLED display
SBCOLED01.oledInit()

// Show text
SBCOLED01.oledShowString("Hello World")
basic.pause(1000)
// Draw line from x-y coordinates 10-15 to x-y coordinates 60-60
SBCOLED01.oledDrawLine(10, 15, 60, 60)
basic.pause(1000)
// Draw rectangle starting at x-y coordinate 10-15 with a width of 20 and a height of 30
SBCOLED01.oledDrawRectangle(10, 15, 20, 30)
basic.pause(1000)
// Draw circle at x-y coordinate 50-50 with a radius of 20
SBCOLED01.oledDrawCircle(50, 50, 20)
basic.pause(1000)

// CLear output from display
SBCOLED01.oledClear()
basic.pause(1000)