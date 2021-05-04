/**
 * LCD tests
 */

makerbit.showStringOnLcd2004("Hello world", 1, 16);
makerbit.showStringOnLcd2004("Hello world", 1, 16, TextOption.AlignLeft);
makerbit.showStringOnLcd2004("Hello world", 1, 16, TextOption.AlignCenter);
makerbit.showStringOnLcd2004("Hello world", 1, 16, TextOption.AlignRight);
makerbit.showStringOnLcd2004("Hello world", 1, 20);
makerbit.showStringOnLcd2004("9", 1, 20, TextOption.PadWithZeros);
makerbit.clearLcd2004();
const pos2004: number = makerbit.position2004(LcdPosition2004.Pos80);
