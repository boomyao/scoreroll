function ScoreRoll(element) {
  this.element = element || document.scrollingElement;
  this.bpr = 16; // 每行音数量
  this.hpr = 30; // 每行高度
  this.cursor = 0;
  this.currentRow = 0;
  this.rowCount = 0;
  this.bpm = 80;
  this.scrolling = false;
  this.frameCap = 0;

  this.frame = this.frame.bind(this);
}

ScoreRoll.prototype.play = function () {
  this.scrolling = true;
  requestAnimationFrame(this.frame);
}


ScoreRoll.prototype.next = function () {
  this.cursor = ++this.cursor % this.bpr;
  if (this.cursor) return;
  if (!this.hadAtBottomWithRow()) {
    this.rowCount++;
    this.element.scrollBy({
      top: this.hpr
    })
  }
}

ScoreRoll.prototype.pause = function () {
  this.scrolling = false;
}

ScoreRoll.prototype.frame = function () {
  var moveH = this.hpr/(this.bpr/(this.bpm/(60*60)));
  if (Math.floor(this.frameCap) < Math.floor(this.frameCap+=moveH)) this.element.scrollTop+=1;
  if(this.hadAtBottom()) this.scrolling = false; 
  if (this.scrolling) {
    requestAnimationFrame(this.frame);
  }
}

ScoreRoll.prototype.hadAtBottom = function() {
  return this.element.scrollTop + this.element.clientHeight === this.element.scrollHeight;
}

ScoreRoll.prototype.hadAtBottomWithRow = function() {
  if (this.rowCount) {
    return this.currentRow + 1 === this.rowCount;
  } else {
    return this.element.scrollTop + this.element.clientHeight === this.element.scrollHeight;
  }
}