export function commands(code: number): string[] {
  const commands = Array(
    {key: 1, command: "wink"},
    {key: 2, command: "double blink"},
    {key: 4, command: "close your eyes"},
    {key: 8, command: "jump"}
  );
  const result = Array();
  let idx: number = code & 16 ? 3 : 0
  
  while( idx>=0 && idx <=3) {
    if( code & commands[idx].key) {
      result.push(commands[idx].command);
    }
    idx+=code & 16 ? -1 : 1;
  }

  return result;
}
