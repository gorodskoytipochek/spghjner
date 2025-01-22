;(async function () {
  const _0x40621e = document.querySelector('.preloader')
  window.addEventListener('load', () => {
    setTimeout(() => {
      _0x40621e.classList.add('loaded')
    }, 1800)
  })

  let _0x52a8d8 = 1,
      _0x4c6283 = 1,
      _0x3143c7 = 1

  // Modified _0x2b9dbb to always return true, bypassing CAPTCHA
  async function _0x2b9dbb() {
    return true
  }

  const _0x44e25d = await _0x2b9dbb()
  // Removed the CAPTCHA overlay code since _0x44e25d is always true

  const _0x45fa23 = {
    toggleButton: document.getElementById('toggleOptions'),
    optionWindow: document.getElementById('optionWindow'),
    optionBtns: document.querySelectorAll('.optionBtn'),
    mineCounter: document.getElementById('cout'),
    cells: document.querySelectorAll('.mine'),
    circles: document.querySelectorAll('.circle'),
    balance: document.getElementById('num-cout'),
    startButton: document.getElementById('accept'),
    footerBtns: document.querySelectorAll('.footer-btn'),
    restartButton: document.getElementById('restart'),
  },
  _0x3f0ebd = {}

  _0x3f0ebd['2'] = 10
  _0x3f0ebd['3'] = 9
  _0x3f0ebd['4'] = 8
  _0x3f0ebd['5'] = 7
  _0x3f0ebd['6'] = 6
  _0x3f0ebd['7'] = 5
  _0x3f0ebd['8'] = 4
  _0x3f0ebd['9'] = 3
  _0x3f0ebd['10'] = 2
  _0x3f0ebd['11'] = 1
  _0x3f0ebd['12'] = 1
  _0x3f0ebd['13'] = 1
  _0x3f0ebd['14'] = 1
  _0x3f0ebd['15'] = 1

  const _0x19c3a4 = {
    isStarted: false,
    selectedMines: 2,
    minePositions: [],
    menuOpened: false,
    wasReset: false,
    hintTimers: [],
    cellsToReveal: _0x3f0ebd,
  }

  const _0x240c91 = _0x19c3a4

  _0x45fa23.footerBtns.forEach((_0x258b10) => (_0x258b10.disabled = true))
  _0x45fa23.optionWindow.style.display = 'none'

  _0x45fa23.toggleButton.addEventListener('click', () => {
    _0x240c91.menuOpened = !_0x240c91.menuOpened
    _0x45fa23.optionWindow.style.display = _0x240c91.menuOpened
      ? 'flex'
      : 'none'
  })

  _0x45fa23.optionBtns.forEach((_0x1b5710) => {
    _0x1b5710.addEventListener('click', () => {
      const _0x21eacb = parseInt(_0x1b5710.textContent)
      if (_0x21eacb <= _0x45fa23.cells.length) {
        _0x240c91.selectedMines = _0x21eacb
        _0x45fa23.mineCounter.textContent = _0x21eacb
        _0x45fa23.optionWindow.style.display = 'none'
        _0x240c91.menuOpened = false
      }
    })
  })

  function _0x2f47fb() {
    _0x240c91.hintTimers.forEach((_0xd69067) => clearTimeout(_0xd69067))
    _0x240c91.hintTimers = []
  }

  function _0x5bb1aa() {
    _0x240c91.isStarted = true
    _0x240c91.wasReset = false
    _0x45fa23.startButton.disabled = true

    const _0x173755 = { length: _0x45fa23.cells.length }
    const _0x34ffe9 = Array.from(_0x173755, (_0x26eff1, _0x489bf2) => _0x489bf2)
    _0x240c91.minePositions = []

    for (let _0x33f181 = 0; _0x33f181 < _0x240c91.selectedMines; _0x33f181++) {
      const _0x4bcebe = Math.floor(Math.random() * _0x34ffe9.length),
            _0x809490 = _0x34ffe9.splice(_0x4bcebe, 1)[0]
      _0x240c91.minePositions.push(_0x809490)
      _0x45fa23.cells[_0x809490].classList.add('red')
    }

    if (!_0x240c91.menuOpened && !_0x240c91.wasReset) {
      _0x3060f5()
    }
  }

  function _0x3060f5() {
    _0x2f47fb()
    const _0x39b811 = _0x240c91.cellsToReveal[_0x240c91.selectedMines] || 1,
          _0x3db1f8 = { length: _0x45fa23.cells.length }
    const _0xe632bd = Array.from(_0x3db1f8, (_0x4130c0, _0x503b73) => _0x503b73)
      .filter((_0x2f8267) => !_0x240c91.minePositions.includes(_0x2f8267))
      .sort(() => Math.random() - 0.5)
      .slice(0, _0x39b811)

    let _0x223b0c = 0
    _0xe632bd.forEach((_0x52ba4d, _0x2a763c) => {
      const _0x1b444a = setTimeout(() => {
          if (!_0x240c91.isStarted) {
            return
          }
          const _0x1084e7 = _0x45fa23.cells[_0x52ba4d],
                _0x2bed3f = document.createElement('div')
          _0x2bed3f.className = 'star-container'
          _0x2bed3f.innerHTML = '<img src="svg/stars.webp" class="star-animation">'
          _0x1084e7.appendChild(_0x2bed3f)
          _0x1084e7.classList.add('greena', 'green-animation')
          _0x45fa23.circles[_0x52ba4d].classList.add('hidden')
          _0x223b0c += 1
        }, _0x2a763c * 1000),
        _0x493373 = setInterval(() => {
          if (_0x223b0c === _0xe632bd.length) {
            _0x45fa23.startButton.disabled = false
            clearInterval(_0x493373)
          }
        }, 1000)
      _0x240c91.hintTimers.push(_0x1b444a)
    })
  }

  function _0x3bf1c1() {
    _0x2f47fb()
    _0x45fa23.cells.forEach((_0x34b1a8) => {
      _0x34b1a8.className = 'mine'
      const _0x5ef815 = _0x34b1a8.querySelector('.star-container')
      if (_0x5ef815) {
        _0x34b1a8.removeChild(_0x5ef815)
      }
    })
    _0x45fa23.circles.forEach((_0x28e022) =>
      _0x28e022.classList.remove('hidden')
    )
    _0x45fa23.footerBtns.forEach((_0x7e44a1) => (_0x7e44a1.disabled = false))
    _0x45fa23.toggleButton.disabled = false
    _0x45fa23.optionWindow.style.display = 'none'
    _0x240c91.isStarted = false
    _0x240c91.minePositions = []
    _0x240c91.wasReset = true
    _0x240c91.menuOpened = false
  }

  _0x45fa23.startButton.addEventListener('click', () => {
    _0x3bf1c1()
    _0x5bb1aa()
  })
})()
