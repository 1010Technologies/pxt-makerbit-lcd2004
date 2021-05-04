// MakerBit blocks supporting both an I2C LCD 2004 display

const enum LcdPosition2004 {
  //% block="1"
  Pos1 = 1,
  //% block="2"
  Pos2 = 2,
  //% block="3"
  Pos3 = 3,
  //% block="4"
  Pos4 = 4,
  //% block="5"
  Pos5 = 5,
  //% block="6"
  Pos6 = 6,
  //% block="7"
  Pos7 = 7,
  //% block="8"
  Pos8 = 8,
  //% block="9"
  Pos9 = 9,
  //% block="10"
  Pos10 = 10,
  //% block="11"
  Pos11 = 11,
  //% block="12"
  Pos12 = 12,
  //% block="13"
  Pos13 = 13,
  //% block="14"
  Pos14 = 14,
  //% block="15"
  Pos15 = 15,
  //% block="16"
  Pos16 = 16,
  //% block="17"
  Pos17 = 17,
  //% block="18"
  Pos18 = 18,
  //% block="19"
  Pos19 = 19,
  //% block="20"
  Pos20 = 20,
  //% block="21"
  Pos21 = 21,
  //% block="22"
  Pos22 = 22,
  //% block="23"
  Pos23 = 23,
  //% block="24"
  Pos24 = 24,
  //% block="25"
  Pos25 = 25,
  //% block="26"
  Pos26 = 26,
  //% block="27"
  Pos27 = 27,
  //% block="28"
  Pos28 = 28,
  //% block="29"
  Pos29 = 29,
  //% block="30"
  Pos30 = 30,
  //% block="31"
  Pos31 = 31,
  //% block="32"
  Pos32 = 32,
  //% block="33"
  Pos33 = 33,
  //% block="34"
  Pos34 = 34,
  //% block="35"
  Pos35 = 35,
  //% block="36"
  Pos36 = 36,
  //% block="37"
  Pos37 = 37,
  //% block="38"
  Pos38 = 38,
  //% block="39"
  Pos39 = 39,
  //% block="40"
  Pos40 = 40,
  //% block="41"
  Pos41 = 41,
  //% block="42"
  Pos42 = 42,
  //% block="43"
  Pos43 = 43,
  //% block="44"
  Pos44 = 44,
  //% block="45"
  Pos45 = 45,
  //% block="46"
  Pos46 = 46,
  //% block="47"
  Pos47 = 47,
  //% block="48"
  Pos48 = 48,
  //% block="49"
  Pos49 = 49,
  //% block="50"
  Pos50 = 50,
  //% block="51"
  Pos51 = 51,
  //% block="52"
  Pos52 = 52,
  //% block="53"
  Pos53 = 53,
  //% block="54"
  Pos54 = 54,
  //% block="55"
  Pos55 = 55,
  //% block="56"
  Pos56 = 56,
  //% block="57"
  Pos57 = 57,
  //% block="58"
  Pos58 = 58,
  //% block="59"
  Pos59 = 59,
  //% block="60"
  Pos60 = 60,
  //% block="61"
  Pos61 = 61,
  //% block="62"
  Pos62 = 62,
  //% block="63"
  Pos63 = 63,
  //% block="64"
  Pos64 = 64,
  //% block="65"
  Pos65 = 65,
  //% block="66"
  Pos66 = 66,
  //% block="67"
  Pos67 = 67,
  //% block="68"
  Pos68 = 68,
  //% block="69"
  Pos69 = 69,
  //% block="70"
  Pos70 = 70,
  //% block="71"
  Pos71 = 71,
  //% block="72"
  Pos72 = 72,
  //% block="73"
  Pos73 = 73,
  //% block="74"
  Pos74 = 74,
  //% block="75"
  Pos75 = 75,
  //% block="76"
  Pos76 = 76,
  //% block="77"
  Pos77 = 77,
  //% block="78"
  Pos78 = 78,
  //% block="79"
  Pos79 = 79,
  //% block="80"
  Pos80 = 80
}

namespace makerbit {
  /**
   * Displays a text on a LCD2004 in the given position range.
   * The text will be cropped if it is longer than the provided length.
   * If there is space left, it will be filled with pad characters.
   * @param text the text to show, eg: "MakerBit"
   * @param startPosition the start position on the LCD, [1 - 80]
   * @param length the maximum space used on the LCD, eg: 20
   * @param option configures padding and alignment, eg: TextOption.Left
   */
  //% subcategory="LCD"
  //% blockId="makerbit_lcd_show_string_on_2004"
  //% block="LCD2004 show %text | at position %startPosition=makerbit_lcd_position_2004 with length %length || and %option"
  //% text.shadowOptions.toString=true
  //% length.min=1 length.max=80 length.fieldOptions.precision=1
  //% expandableArgumentMode="toggle"
  //% inlineInputMode="inline"
  //% weight=80
  export function showStringOnLcd2004(
    text: string,
    startPosition: number,
    length: number,
    option?: TextOption
  ): void {
    updateCharacterBuffer(
      text,
      startPosition - 1,
      length,
      20,
      4,
      toAlignment(option),
      toPad(option)
    );
  }

  /**
   * Clears the LCD2004 completely.
   */
  //% subcategory="LCD"
  //% blockId="makerbit_lcd_clear_2004" block="LCD2004 clear display"
  //% weight=79
  export function clearLcd2004(): void {
    showStringOnLcd2004("", 1, 80);
  }

  /**
   * Turns a LCD position into a number.
   * @param pos the LCD position, eg: LcdPosition2004.Pos1
   */
  //% subcategory="LCD"
  //% blockId=makerbit_lcd_position_2004
  //% block="%pos"
  //% pos.fieldEditor="gridpicker"
  //% pos.fieldOptions.columns=20
  //% blockHidden=true
  export function position2004(pos: LcdPosition2004): number {
    return pos;
  }
}
