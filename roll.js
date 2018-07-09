function ScoreRoll(paperElem) {
  if (!paperElem) throw "must suport current element."
  paperElem.style.overflow = 'auto';
  this.paperElem = paperElem;
  this.rowWidth = 16;
  this.rowHeight = 30;
  this.cursor = 0;
  this.currentRow = 0;
  this.rowCount = 0;
  this.speed = 2;
}

ScoreRoll.prototype.play = function () {
  this.playTimer = setInterval(() => {
    this.next();
  }, 1000)
}


ScoreRoll.prototype.next = function () {
  this.cursor += this.speed;
  this.cursor = this.cursor % this.rowWidth;
  if (this.cursor) return;
  if (this.rowCount && this.currentRow++ < this.rowCount || 
    !this.rowCount && this.paperElem.scrollTop + this.paperElem.clientHeight < this.paperElem.scrollHeight ) {
    this.paperElem.scrollBy({
      top: this.rowHeight
    })
  } else {
    this.pause();
  }
}

ScoreRoll.prototype.pause = function () {
  console.log('pause')
  if (this.playTimer) clearInterval(this.playTimer);
}