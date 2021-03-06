"use strict";

var ScoreBoard = function ScoreBoard(props) {
  var frames = props.frames,
      frameCounter = props.frameCounter;


  var header = [];
  for (var i = 0; i < frames.length; i++) {
    header.push(React.createElement(
      "div",
      { key: i, className: "head-frame" },
      i + 1
    ));
  }

  return React.createElement(
    "div",
    { id: "score-board" },
    header,
    frames.map(function (frame, index) {
      return React.createElement(ScoreFrame, { key: index, frame: frame });
    })
  );
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NsaWVudC9zY29yZWJvYXJkLmpzeCJdLCJuYW1lcyI6WyJTY29yZUJvYXJkIiwicHJvcHMiLCJmcmFtZXMiLCJmcmFtZUNvdW50ZXIiLCJoZWFkZXIiLCJpIiwibGVuZ3RoIiwicHVzaCIsIm1hcCIsImZyYW1lIiwiaW5kZXgiXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsYUFBYSxTQUFiQSxVQUFhLENBQUNDLEtBQUQsRUFBVztBQUFBLE1BQ3BCQyxNQURvQixHQUNLRCxLQURMLENBQ3BCQyxNQURvQjtBQUFBLE1BQ1pDLFlBRFksR0FDS0YsS0FETCxDQUNaRSxZQURZOzs7QUFHMUIsTUFBSUMsU0FBUyxFQUFiO0FBQ0EsT0FBSyxJQUFJQyxJQUFJLENBQWIsRUFBZ0JBLElBQUlILE9BQU9JLE1BQTNCLEVBQW1DRCxHQUFuQyxFQUF3QztBQUN0Q0QsV0FBT0csSUFBUCxDQUFZO0FBQUE7QUFBQSxRQUFLLEtBQUtGLENBQVYsRUFBYSxXQUFVLFlBQXZCO0FBQXFDQSxVQUFFO0FBQXZDLEtBQVo7QUFDRDs7QUFFRCxTQUNFO0FBQUE7QUFBQSxNQUFLLElBQUcsYUFBUjtBQUNHRCxVQURIO0FBRUdGLFdBQU9NLEdBQVAsQ0FBVyxVQUFDQyxLQUFELEVBQVFDLEtBQVI7QUFBQSxhQUNWLG9CQUFDLFVBQUQsSUFBWSxLQUFLQSxLQUFqQixFQUF3QixPQUFPRCxLQUEvQixHQURVO0FBQUEsS0FBWDtBQUZILEdBREY7QUFRRCxDQWhCRCIsImZpbGUiOiJzY29yZWJvYXJkLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIFNjb3JlQm9hcmQgPSAocHJvcHMpID0+IHtcbiAgdmFyIHsgZnJhbWVzLCBmcmFtZUNvdW50ZXIgfSA9IHByb3BzO1xuICBcbiAgdmFyIGhlYWRlciA9IFtdXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZnJhbWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgaGVhZGVyLnB1c2goPGRpdiBrZXk9e2l9IGNsYXNzTmFtZT1cImhlYWQtZnJhbWVcIj57aSsxfTwvZGl2Pik7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgaWQ9XCJzY29yZS1ib2FyZFwiPlxuICAgICAge2hlYWRlcn1cbiAgICAgIHtmcmFtZXMubWFwKChmcmFtZSwgaW5kZXgpID0+IFxuICAgICAgICA8U2NvcmVGcmFtZSBrZXk9e2luZGV4fSBmcmFtZT17ZnJhbWV9Lz5cbiAgICAgICl9XG4gICAgPC9kaXY+ICBcbiAgKVxufSJdfQ==