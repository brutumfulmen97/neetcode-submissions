function createBucket() {
    return Array.from({ length: 9 }, () => new Set<string>());
}

class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        const buckets: Record<"box" | "hor" | "ver", Array<Set<string>>> = {
    box: createBucket(),
    hor: createBucket(),
    ver: createBucket(),
  };

  let valid = true;

  board.forEach((r, rIdx) => {
    r.forEach((cell, cIdx) => {
      const boxRow = Math.floor(rIdx / 3);
      const boxCol = Math.floor(cIdx / 3);
      const box = boxRow * 3 + boxCol;
      if (
        (buckets.hor[rIdx]?.has(cell) ||
        buckets.ver[cIdx]?.has(cell) ||
        buckets.box[box]?.has(cell)) && cell !== "."
      ) {
        valid = false;
        return;
      }
      buckets.hor[rIdx]?.add(cell);
      buckets.ver[cIdx]?.add(cell);
      buckets.box[box]?.add(cell);
    });
  });
  return valid; 
    }
}
