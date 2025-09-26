import React from 'react'

function Analytics() {
  // random hexcode generator with shades of green,yellow and orange only
  const randomColor = () => {
    const shades = [
      '#00e396', '#feb019', '#FF5733', // Green shades
      '#008ffb'
    ];
    return shades[Math.floor(Math.random() * shades.length)];
  }
  return (
    <div>
      <div
        className="map leaflet-container leaflet-touch leaflet-retina leaflet-fade-anim leaflet-grab leaflet-touch-drag leaflet-touch-zoom"
        id="elector_geotagging"
        style={{ width: "100%", height: "586px", position: "relative" }}
        tabIndex="0"
      >
        <div
          className="leaflet-pane leaflet-map-pane"
          style={{ transform: "translate3d(0px, 0px, 0px)" }}
        >
          <div className="leaflet-pane leaflet-tile-pane"></div>
          <div className="leaflet-pane leaflet-overlay-pane"></div>
          <div className="leaflet-pane leaflet-shadow-pane"></div>
          <div className="leaflet-pane leaflet-marker-pane"></div>
          <div className="leaflet-pane leaflet-tooltip-pane"></div>
          <div className="leaflet-pane leaflet-popup-pane"></div>
          <div className="leaflet-proxy leaflet-zoom-animated"></div>
          <div
            className="leaflet-pane leaflet-pane_All_AC-pane"
            style={{ zIndex: 400, mixBlendMode: "normal" }}
          >
            <svg
              pointerEvents="none"
              className="leaflet-zoom-animated"
              width="824"
              height="703"
              viewBox="-69 -59 824 703"
              style={{ transform: "translate3d(-69px, -59px, 0px)" }}
            >
              <g>
                <path
                  className="leaflet-interactive"
                  stroke="#fff"
                  strokeOpacity="1"
                  strokeWidth="1"
                  strokeLinecap="butt"
                  strokeLinejoin="miter"
                  fill={randomColor()}
                  fillOpacity="1"
                  fillRule="evenodd"
                  d="M327 242L328 243L323 247L325 250L325 248L328 249L326 254L321 255L313 260L308 254L307 255L307 249L313 246L311 245L312 244L309 243L311 234L330 237L329 240L327 241z"
                ></path>
                <path
                  className="leaflet-interactive"
                  stroke="#fff"
                  strokeOpacity="1"
                  strokeWidth="1"
                  strokeLinecap="butt"
                  strokeLinejoin="miter"
                  fill={randomColor()}
                  fillOpacity="1"
                  fillRule="evenodd"
                  d="M305 263L302 263L300 265L293 261L294 262L294 255L298 255L302 247L307 249L307 255L308 254L313 259L319 256L322 267L315 268L311 265L310 266L306 264z"
                ></path>
                <path
                  className="leaflet-interactive"
                  stroke="#fff"
                  strokeOpacity="1"
                  strokeWidth="1"
                  strokeLinecap="butt"
                  strokeLinejoin="miter"
                  fill={randomColor()}
                  fillOpacity="1"
                  fillRule="evenodd"
                  d="M300 275L299 272L296 275L296 279L293 280L287 273L297 268L299 270L303 270L307 264L309 266L311 265L314 268L322 266L324 271L308 294L300 290L300 288L301 289L306 286L300 275z"
                ></path>
                <path
                  className="leaflet-interactive"
                  stroke="#fff"
                  strokeOpacity="1"
                  strokeWidth="1"
                  strokeLinecap="butt"
                  strokeLinejoin="miter"
                  fill="#FF0000"
                  fillOpacity="1"
                  fillRule="evenodd"
                  d="M305 263L306 266L304 270L300 270L297 268L279 276L277 276L277 274L275 274L273 270L276 269L276 271L279 272L281 272L285 268L285 270L287 270L287 266L283 266L281 264L282 261L280 261L281 260L279 258L285 252L287 251L294 253L299 248L300 253L298 255L294 255L294 262L293 261L299 265L304 263z"
                ></path>
                <path
                  className="leaflet-interactive"
                  stroke="#fff"
                  strokeOpacity="1"
                  strokeWidth="1"
                  strokeLinecap="butt"
                  strokeLinejoin="miter"
                  fill={randomColor()}
                  fillOpacity="1"
                  fillRule="evenodd"
                  d="M300 275L306 286L304 288L300 288L299 291L292 287L289 288L276 298L274 292L280 292L281 289L283 289L283 287L280 286L278 284L279 283L277 282L273 282L271 284L269 282L269 284L266 283L267 280L268 281L276 278L287 272L292 278L292 280L297 279L296 274L298 274L298 272L300 272L300 275z"
                ></path>
                <path
                  className="leaflet-interactive"
                  stroke="#fff"
                  strokeOpacity="1"
                  strokeWidth="1"
                  strokeLinecap="butt"
                  strokeLinejoin="miter"
                  fill={randomColor()}
                  fillOpacity="1"
                  fillRule="evenodd"
                  d="M260 274L262 270L260 270L260 268L257 267L256 272L246 270L244 276L231 278L231 276L236 273L236 267L233 266L230 269L228 265L226 266L228 270L226 270L221 265L220 261L222 251L225 254L234 237L243 238L253 245L261 239L261 241L263 241L265 245L269 247L266 250L265 255L269 259L269 265L270 266L275 263L279 258L281 260L280 261L282 261L281 264L283 266L287 266L287 270L285 270L285 268L281 272L276 271L276 269L274 269L274 273L277 274L277 276L269 281L268 276L265 275L261 277L260 274z"
                ></path>
                <path
                  className="leaflet-interactive"
                  stroke="#fff"
                  strokeOpacity="1"
                  strokeWidth="1"
                  strokeLinecap="butt"
                  strokeLinejoin="miter"
                  fill={randomColor()}
                  fillOpacity="1"
                  fillRule="evenodd"
                  d="M273 290L272 287L266 287L265 284L260 285L259 282L255 282L254 287L252 287L251 282L244 281L245 271L248 270L256 272L257 267L259 267L260 270L262 270L262 272L260 272L260 277L264 275L269 276L269 278L266 281L267 284L269 284L269 282L271 284L273 282L277 282L281 286L283 286L280 292L275 293L273 290z"
                ></path>
                <path
                  className="leaflet-interactive"
                  stroke="#fff"
                  strokeOpacity="1"
                  strokeWidth="1"
                  strokeLinecap="butt"
                  strokeLinejoin="miter"
                  fill={randomColor()}
                  fillOpacity="1"
                  fillRule="evenodd"
                  d="M288 305L287 306L286 301L288 297L287 292L289 288L292 287L298 291L302 291L307 294L302 301L294 301L291 309L289 309L289 307L291 307L288 306L290 304L288 305z"
                ></path>
                <path
                  className="leaflet-interactive"
                  stroke="#fff"
                  strokeOpacity="1"
                  strokeWidth="1"
                  strokeLinecap="butt"
                  strokeLinejoin="miter"
                  fill={randomColor()}
                  fillOpacity="1"
                  fillRule="evenodd"
                  d="M136 356L138 350L144 347L143 346L145 342L149 340L154 342L157 341L157 333L167 335L172 334L179 325L174 322L175 317L172 314L181 302L183 304L183 310L188 311L194 305L200 305L205 309L211 304L213 304L213 302L215 302L216 299L228 301L228 299L226 299L227 296L237 298L238 297L235 293L239 288L232 288L230 286L233 285L232 284L224 282L222 280L223 277L225 277L225 275L228 274L231 278L238 277L240 275L243 276L244 280L246 282L250 282L253 287L255 282L259 282L260 285L265 284L267 291L266 294L272 298L275 297L273 299L275 301L280 302L270 317L277 323L276 329L270 337L265 331L264 333L262 332L262 334L258 332L256 330L257 326L249 325L243 336L230 350L229 356L240 363L235 369L226 365L221 370L218 369L213 364L211 364L206 369L202 370L195 377L185 377L177 372L170 375L167 372L161 370L157 374L154 373L149 380L145 380L141 376L145 364L138 361L136 356z"
                ></path>
                <path
                  className="leaflet-interactive"
                  stroke="#fff"
                  strokeOpacity="1"
                  strokeWidth="1"
                  strokeLinecap="butt"
                  strokeLinejoin="miter"
                  fill={randomColor()}
                  fillOpacity="1"
                  fillRule="evenodd"
                  d="M194 242L201 248L211 251L217 257L220 257L222 266L227 270L228 269L226 267L228 265L230 269L233 266L236 267L236 273L234 275L230 277L228 274L225 275L225 277L223 277L222 280L228 284L232 284L233 285L230 286L232 288L240 288L235 292L238 298L228 296L226 298L228 300L227 301L217 299L216 302L214 302L205 309L201 305L195 305L188 311L183 310L183 304L181 302L172 313L175 318L174 321L179 325L171 335L157 333L157 341L154 342L150 340L148 342L145 342L143 346L144 347L142 347L142 349L138 349L136 355L137 356L135 356L135 354L132 353L131 348L127 343L115 340L113 336L113 328L110 321L112 312L120 310L127 311L132 306L134 296L139 291L143 280L143 276L147 272L151 272L160 279L160 277L165 272L169 272L180 283L186 276L187 271L173 258L173 256L177 251L180 242L186 242L190 240L194 242z"
                ></path>
                <path
                  className="leaflet-interactive"
                  stroke="#fff"
                  strokeOpacity="1"
                  strokeWidth="1"
                  strokeLinecap="butt"
                  strokeLinejoin="miter"
                  fill={randomColor()}
                  fillOpacity="1"
                  fillRule="evenodd"
                  d="M420 257L421 261L418 268L414 272L412 280L414 283L415 292L418 297L425 305L431 308L426 314L424 314L410 327L407 326L408 325L407 326L400 323L401 319L403 321L403 319L407 316L407 312L405 308L402 306L402 304L405 303L403 301L402 289L402 257L419 255L420 256z"
                ></path>
                <path
                  className="leaflet-interactive"
                  stroke="#fff"
                  strokeOpacity="1"
                  strokeWidth="1"
                  strokeLinecap="butt"
                  strokeLinejoin="miter"
                  fill={randomColor()}
                  fillOpacity="1"
                  fillRule="evenodd"
                  d="M331 433L326 432L321 428L317 428L316 416L308 405L310 405L311 397L314 392L315 386L322 381L322 375L331 381L335 381L335 387L354 378L357 375L357 373L363 371L367 373L369 371L370 366L374 364L384 368L382 376L384 376L389 381L381 383L381 385L387 391L389 391L387 394L385 394L383 397L382 396L379 399L383 399L387 403L394 401L392 397L393 393L397 393L403 390L407 399L405 399L398 406L397 415L399 419L403 419L405 422L408 423L410 427L410 437L412 439L411 442L408 445L402 447L398 451L391 454L367 458L363 458L363 456L361 456L355 460L348 452L349 443L345 439L339 437L338 434L331 433z"
                ></path>
                <path
                  className="leaflet-interactive"
                  stroke="#fff"
                  strokeOpacity="1"
                  strokeWidth="1"
                  strokeLinecap="butt"
                  strokeLinejoin="miter"
                  fill="#FF0000"
                  fillOpacity="1"
                  fillRule="evenodd"
                  d="M398 374L398 370L400 370L402 366L403 367L403 363L401 361L395 361L397 355L399 354L410 363L410 365L408 365L404 369L405 384L403 384L404 385L401 390L397 393L394 392L392 394L394 401L387 403L383 399L380 400L379 399L389 391L387 391L381 385L381 383L389 381L384 376L384 374L386 374L392 380L399 376L398 374z"
                ></path>
                <path
                  className="leaflet-interactive"
                  stroke="#fff"
                  strokeOpacity="1"
                  strokeWidth="1"
                  strokeLinecap="butt"
                  strokeLinejoin="miter"
                  fill="#FF0000"
                  fillOpacity="1"
                  fillRule="evenodd"
                  d="M399 371L399 375L391 380L387 376L387 374L384 373L384 375L382 375L385 361L389 359L390 355L397 354L395 361L401 361L403 363L403 367L402 366L401 369L398 370L399 371z"
                ></path>
                <path
                  className="leaflet-interactive"
                  stroke="#fff"
                  strokeOpacity
              strokeLinecap="butt"
              strokeLinejoin="miter"
              fill={randomColor()}
              fillOpacity="1"
              fillRule="evenodd"
              d="M416 394L407 398L403 390L401 391L404 385L403 384L405 384L404 369L408 365L410 365L415 359L415 357L417 359L418 358L417 360L421 362L418 363L413 368L416 371L428 377L424 382L425 383L420 392L416 394z"
            ></path>
            <path
              className="leaflet-interactive"
              stroke="#fff"
              strokeOpacity="1"
              strokeWidth="1"
              strokeLinecap="butt"
              strokeLinejoin="miter"
              fill={randomColor()}
              fillOpacity="1"
              fillRule="evenodd"
              d="M384 337L388 335L393 336L397 331L401 333L407 331L409 335L411 335L414 332L417 333L417 335L414 336L416 338L412 338L409 340L410 343L407 344L408 347L416 351L415 354L417 354L415 360L411 363L407 359L401 357L402 356L399 354L384 355L386 349L384 349L380 345L381 338L383 336L384 337z"
            ></path>
            <path
              className="leaflet-interactive"
              stroke="#fff"
              strokeOpacity="1"
              strokeWidth="1"
              strokeLinecap="butt"
              strokeLinejoin="miter"
              fill="#FF0000"
              fillOpacity="1"
              fillRule="evenodd"
              d="M426 392L420 392L428 377L426 375L421 374L413 368L418 363L421 362L417 360L419 358L419 354L422 354L423 357L425 357L422 350L426 347L426 345L423 343L427 340L430 342L431 341L434 344L431 346L433 351L436 352L437 357L441 361L447 377L446 380L448 382L449 389L446 390L447 386L437 384L435 386L428 387L426 389L426 392z"
            ></path>
            <path
              className="leaflet-interactive"
              stroke="#fff"
              strokeOpacity="1"
              strokeWidth="1"
              strokeLinecap="butt"
              strokeLinejoin="miter"
              fill="#FF0000"
              fillOpacity="1"
              fillRule="evenodd"
              d="M449 390L446 379L447 376L444 370L446 368L450 368L455 372L460 371L459 370L462 367L469 368L470 367L468 365L472 365L475 362L481 364L478 371L467 385L466 390L458 392L458 394L456 395L451 390L449 390z"
            ></path>
            <path
              className="leaflet-interactive"
              stroke="#fff"
              strokeOpacity="1"
              strokeWidth="1"
              strokeLinecap="butt"
              strokeLinejoin="miter"
              fill="#FF0000"
              fillOpacity="1"
              fillRule="evenodd"
              d="M432 340L432 338L430 337L432 335L426 331L424 327L425 326L419 318L426 314L431 309L437 314L441 323L444 326L446 323L460 342L461 346L469 352L471 355L471 359L474 362L471 365L469 365L469 368L462 367L459 370L460 371L455 372L450 368L443 368L441 360L431 347L435 343L434 339L432 340z"
            ></path>
            <path
              className="leaflet-interactive"
              stroke="#fff"
              strokeOpacity="1"
              strokeWidth="1"
              strokeLinecap="butt"
              strokeLinejoin="miter"
              fill={randomColor()}
              fillOpacity="1"
              fillRule="evenodd"
              d="M447 310L447 304L442 301L445 298L443 293L444 290L441 287L455 288L460 286L452 297L456 301L455 304L448 311L447 310z"
            ></path>
            <path
              className="leaflet-interactive"
              stroke="#fff"
              strokeOpacity="1"
              strokeWidth="1"
              strokeLinecap="butt"
              strokeLinejoin="miter"
              fill="#FF0000"
              fillOpacity="1"
              fillRule="evenodd"
              d="M456 301L452 297L461 286L460 285L459 287L454 288L453 284L455 284L456 281L458 283L458 281L460 281L459 275L468 272L476 279L475 280L477 282L477 292L473 297L456 301z"
            ></path>
            <path
              className="leaflet-interactive"
              stroke="#fff"
              strokeOpacity="1"
              strokeWidth="1"
              strokeLinecap="butt"
              strokeLinejoin="miter"
              fill={randomColor()}
              fillOpacity="1"
              fillRule="evenodd"
              d="M447 310L448 311L446 315L446 323L444 325L439 321L437 314L431 308L425 305L419 298L425 295L434 287L436 287L436 281L443 276L441 274L438 274L444 268L446 270L445 271L447 276L450 277L448 277L447 280L458 276L461 281L458 280L459 281L457 283L456 281L456 283L453 284L453 288L442 287L444 290L443 293L445 297L443 299L444 300L442 301L447 304L445 306L447 310z"
            ></path>
            <path
              className="leaflet-interactive"
              stroke="#fff"
              strokeOpacity="1"
              strokeWidth="1"
              strokeLinecap="butt"
              strokeLinejoin="miter"
              fill={randomColor()}
              fillOpacity="1"
              fillRule="evenodd"
              d="M425 263L432 262L436 268L436 274L442 274L442 278L435 281L437 283L435 285L436 288L433 287L428 293L419 298L415 292L414 283L412 279L414 272L418 268L420 263L425 263z"
            ></path>
            <path
              className="leaflet-interactive"
              stroke="#fff"
              strokeOpacity="1"
              strokeWidth="1"
              strokeLinecap="butt"
              strokeLinejoin="miter"
              fill={randomColor()}
              fillOpacity="1"
              fillRule="evenodd"
              d="M468 272L447 280L447 278L450 277L447 276L445 272L446 271L444 269L442 269L437 275L436 268L433 263L440 262L439 261L443 259L441 257L440 251L436 246L447 240L449 240L450 243L455 244L463 242L461 246L461 256L458 263L465 271L468 272z"
            ></path>
            <path
              className="leaflet-interactive"
              stroke="#fff"
              strokeOpacity="1"
              strokeWidth="1"
              strokeLinecap="butt"
              strokeLinejoin="miter"
              fill={randomColor()}
              fillOpacity="1"
              fillRule="evenodd"
              d="M431 248L431 246L432 247L435 245L440 251L443 260L439 260L440 262L420 262L421 259L418 252L425 247L425 249L431 248z"
            ></path>
            <path
              className="leaflet-interactive"
              stroke="#fff"
              strokeOpacity="1"
              strokeWidth="1"
              strokeLinecap="butt"
              strokeLinejoin="miter"
              fill={randomColor()}
              fillOpacity="1"
              fillRule="evenodd"
              d="M431 248L425 248L419 252L414 248L403 245L399 241L399 239L406 236L417 238L419 240L421 240L420 239L422 237L428 237L431 238L435 244L431 248z"
            ></path>
            <path
              className="leaflet-interactive"
              stroke="#fff"
              strokeOpacity="1"
              strokeWidth="1"
              strokeLinecap="butt"
              strokeLinejoin="miter"
              fill={randomColor()}
              fillOpacity="1"
              fillRule="evenodd"
              d="M462 242L455 244L450 243L449 240L447 240L440 243L437 246L432 241L432 239L444 238L448 234L452 234L464 226L470 230L467 234L463 234L464 237L462 242z"
            ></path>
            <path
              className="leaflet-interactive"
              stroke="#fff"
              strokeOpacity="1"
              strokeWidth="1"
              strokeLinecap="butt"
              strokeLinejoin="miter"
              fill="#FF0000"
              fillOpacity="1"
              fillRule="evenodd"
              d="M465 219L469 226L469 230L467 227L465 228L463 226L455 232L446 235L447 224L450 223L449 220L447 220L447 216L463 216L465 219z"
            ></path>
            <path
              className="leaflet-interactive"
              stroke="#fff"
              strokeOpacity="1"
              strokeWidth="1"
              strokeLinecap="butt"
              strokeLinejoin="miter"
              fill={randomColor()}
              fillOpacity="1"
              fillRule="evenodd"
              d="M447 218L447 220L449 220L450 223L447 224L447 233L444 238L429 238L426 235L426 233L434 231L435 228L440 231L440 214L447 216z"
            ></path>
            <path
              className="leaflet-interactive"
              stroke="#fff"
              strokeOpacity="1"
              strokeWidth="1"
              strokeLinecap="butt"
              strokeLinejoin="miter"
              fill="#FF0000"
              fillOpacity="1"
              fillRule="evenodd"
              d="M431 220L432 221L429 229L426 233L428 237L427 238L422 237L420 239L421 240L419 240L417 238L405 236L399 239L396 227L411 229L414 228L418 230L420 226L424 226L424 224L426 224L426 220L431 220z"
            ></path>
            <path
              className="leaflet-interactive"
              stroke="#fff"
              strokeOpacity="1"
              strokeWidth="1"
              strokeLinecap="butt"
              strokeLinejoin="miter"
              fill={randomColor()}
              fillOpacity="1"
              fillRule="evenodd"
              d="M434 215L434 217L429 218L425 218L423 216L421 218L421 222L424 223L424 227L421 226L418 229L419 230L413 228L396 227L396 205L416 212L430 213L434 215z"
            ></path>
            <path
              className="leaflet-interactive"
              stroke="#fff"
              strokeOpacity="1"
              strokeWidth="1"
              strokeLinecap="butt"
              strokeLinejoin="miter"
              fill="#FF0000"
              fillOpacity="1"
              fillRule="evenodd"
              d="M440 217L441 230L440 231L435 228L434 231L428 233L427 232L432 221L427 220L425 224L421 222L421 218L423 216L425 218L434 217L435 214L439 214L440 217z"
            ></path>
            <path
              className="leaflet-interactive"
              stroke="#fff"
              strokeOpacity="1"
              strokeWidth="1"
              strokeLinecap="butt"
              strokeLinejoin="miter"
              fill="#FF0000"
              fillOpacity="1"
              fillRule="evenodd"
              d="M463 216L455 217L427 213L428 210L432 208L430 206L430 202L433 201L437 195L439 197L437 207L443 211L445 207L447 207L451 203L469 205L467 205L464 208L465 213L463 216z"
            ></path>
            <path
              className="leaflet-interactive"
              stroke="#fff"
              strokeOpacity="1"
              strokeWidth="1"
              strokeLinecap="butt"
              strokeLinejoin="miter"
              fill={randomColor()}
              fillOpacity="1"
              fillRule="evenodd"
              d="M387 118L387 124L385 126L383 124L373 122L371 134L375 134L377 136L377 142L373 146L369 143L368 140L364 144L353 145L353 137L349 137L347 135L343 140L342 139L340 141L336 141L336 147L334 149L324 151L322 155L327 154L325 156L325 159L319 162L319 166L314 171L313 169L310 172L307 170L310 167L302 159L292 154L271 136L280 126L272 117L271 118L267 116L266 112L261 111L257 105L259 103L258 100L261 97L261 93L270 75L272 73L274 75L281 76L285 72L285 68L288 63L291 64L292 69L296 73L307 74L317 84L324 79L328 81L329 80L333 88L331 92L331 100L334 101L342 101L342 99L348 93L348 91L353 90L355 84L378 83L378 85L380 83L383 88L385 100L391 108L390 115L387 118zM317 158L317 160L318 157L314 155L317 158z"
            ></path>
            <path
              className="leaflet-interactive"
              stroke="#fff"
              strokeOpacity="1"
              strokeWidth="1"
              strokeLinecap="butt"
              strokeLinejoin="miter"
              fill="#FF0000"
              fillOpacity="1"
              fillRule="evenodd"
              d="M388 155L397 161L395 163L395 175L393 180L399 192L397 200L394 198L392 190L387 187L387 191L383 193L386 196L385 197L375 192L360 188L357 191L355 191L352 188L355 187L350 184L353 180L351 179L353 175L353 173L351 173L351 165L342 163L338 160L334 163L333 160L325 160L325 156L327 154L322 155L322 153L330 149L335 149L336 142L341 141L342 139L343 140L346 137L346 135L348 135L348 137L352 137L354 139L352 145L365 144L369 140L369 144L373 147L374 144L377 143L378 147L388 155z"
            ></path>
            <path
              className="leaflet-interactive"
              stroke="#fff"
              strokeOpacity="1"
              strokeWidth="1"
              strokeLinecap="butt"
              strokeLinejoin="miter"
              fill={randomColor()}
              fillOpacity="1"
              fillRule="evenodd"
              d="M365 206L360 206L356 210L356 212L338 189L341 186L343 186L344 189L347 192L350 191L351 194L354 193L359 188L361 188L390 199L388 201L386 199L384 203L377 202L373 209L365 206z"
            ></path>
            <path
              className="leaflet-interactive"
              stroke="#fff"
              strokeOpacity="1"
              strokeWidth="1"
              strokeLinecap="butt"
              strokeLinejoin="miter"
              fill={randomColor()}
              fillOpacity="1"
              fillRule="evenodd"
              d="M325 159L333 160L334 163L337 160L341 163L345 163L352 167L351 172L353 174L351 178L353 180L350 183L355 187L352 188L355 191L352 194L349 191L346 192L346 190L342 186L334 192L329 188L332 181L318 165L321 160L325 159z"
            ></path>
            <path
              className="leaflet-interactive"
              stroke="#fff"
              strokeOpacity="1"
              strokeWidth="1"
              strokeLinecap="butt"
              strokeLinejoin="miter"
              fill={randomColor()}
              fillOpacity="1"
              fillRule="evenodd"
              d="M316 178L321 179L324 182L317 191L320 194L312 203L308 210L302 205L300 209L302 211L299 214L299 216L297 216L287 208L287 206L284 203L284 199L285 198L289 200L291 196L296 196L298 198L300 193L300 187L302 184L309 182L314 177L316 178z"
            ></path>
            <path
              className="leaflet-interactive"
              stroke="#fff"
              strokeOpacity="1"
              strokeWidth="1"
              strokeLinecap="butt"
              strokeLinejoin="miter"
              fill={randomColor()}
              fillOpacity="1"
              fillRule="evenodd"
              d="M318 159L317 160L316 156L314 155L316 155L318 159zM252 103L255 104L259 110L266 112L268 116L274 118L280 125L271 136L292 154L304 161L310 167L307 170L308 171L310 172L312 169L321 178L318 179L315 177L310 182L303 184L300 187L299 198L297 198L297 196L292 196L288 200L284 198L284 204L286 204L287 208L291 212L281 212L267 200L270 195L270 186L263 181L263 178L250 173L243 172L240 169L237 177L231 177L223 172L223 166L215 164L216 163L214 161L214 165L204 164L202 162L197 161L191 153L191 147L194 139L188 134L186 134L186 132L189 121L193 117L200 120L203 109L207 109L212 114L214 114L220 101L224 99L229 100L235 98L242 99L252 103z"
            ></path>
            <path
              className="leaflet-interactive"
              stroke="#fff"
              strokeOpacity="1"
              strokeWidth="1"
              strokeLinecap="butt"
              strokeLinejoin="miter"
              fill="#FF0000"
              fillOpacity="1"
              fillRule="evenodd"
              d="M251 198L261 200L263 202L267 200L280 211L280 217L276 219L277 220L274 223L275 226L272 227L250 224L250 217L255 216L250 211L252 207L252 205L250 205L251 200L249 199L249 197L250 198z"
            ></path>
            <path
              className="leaflet-interactive"
              stroke="#fff"
              strokeOpacity="1"
              strokeWidth="1"
              strokeLinecap="butt"
              strokeLinejoin="miter"
              fill="#FF0000"
              fillOpacity="1"
              fillRule="evenodd"
              d="M282 212L291 212L295 214L293 218L288 217L285 219L284 222L285 221L286 224L284 228L277 227L277 225L276 226L273 223L280 218L280 212L282 212z"
            ></path>
            <path
              className="leaflet-interactive"
              stroke="#fff"
              strokeOpacity="1"
              strokeWidth="1"
              strokeLinecap="butt"
              strokeLinejoin="miter"
              fill={randomColor()}
              fillOpacity="1"
              fillRule="evenodd"
              d="M297 230L294 250L292 253L287 251L286 252L286 248L284 245L285 244L281 246L278 245L275 248L266 245L272 237L270 235L277 230L275 230L274 227L297 229z"
            ></path>
            <path
              className="leaflet-interactive"
              stroke="#fff"
              strokeOpacity="1"
              strokeWidth="1"
              strokeLinecap="butt"
              strokeLinejoin="miter"
              fill={randomColor()}
              fillOpacity="1"
              fillRule="evenodd"
              d="M314 216L312 218L300 221L298 223L297 229L284 227L286 225L284 221L287 217L293 218L296 215L299 216L299 214L302 211L300 209L302 205L314 216z"
            ></path>
            <path
              className="leaflet-interactive"
              stroke="#fff"
              strokeOpacity="1"
              strokeWidth="1"
              strokeLinecap="butt"
              strokeLinejoin="miter"
              fill={randomColor()}
              fillOpacity="1"
              fillRule="evenodd"
              d="M316 169L319 167L326 174L332 182L332 184L329 187L330 190L334 191L330 197L329 203L326 208L320 215L315 217L314 214L308 210L309 207L319 196L317 191L324 183L319 175L316 173L316 169z"
            ></path>
            <path
              className="leaflet-interactive"
              stroke="#fff"
              strokeOpacity="1"
              strokeWidth="1"
              strokeLinecap="butt"
              strokeLinejoin="miter"
              fill={randomColor()}
              fillOpacity="1"
              fillRule="evenodd"
              d="M342 216L339 221L329 217L324 212L329 204L330 197L337 189L354 209L352 212L342 216z"
            ></path>
            <path
              className="leaflet-interactive"
              stroke="#fff"
              strokeOpacity="1"
              strokeWidth="1"
              strokeLinecap="butt"
              strokeLinejoin="miter"
              fill={randomColor()}
              fillOpacity="1"
              fillRule="evenodd"
              d="M326 223L326 225L323 228L325 232L329 232L331 234L330 237L312 234L310 236L309 242L309 244L313 246L312 247L302 247L299 248L294 253L292 253L294 251L296 233L298 223L300 221L320 215L322 217L323 222L326 223z"
            ></path>
            <path
              className="leaflet-interactive"
              stroke="#fff"
              strokeOpacity="1"
              strokeWidth="1"
              strokeLinecap="butt"
              strokeLinejoin="miter"
              fill={randomColor()}
              fillOpacity="1"
              fillRule="evenodd"
              d="M344 231L348 229L350 235L346 238L339 239L330 237L331 234L329 232L324 231L323 228L325 225L326 226L326 224L323 221L320 214L324 212L329 217L338 220L340 224L340 230L344 231z"
            ></path>
            <path
              className="leaflet-interactive"
              stroke="#fff"
              strokeOpacity="1"
              strokeWidth="1"
              strokeLinecap="butt"
              strokeLinejoin="miter"
              fill={randomColor()}
              fillOpacity="1"
              fillRule="evenodd"
              d="M344 231L340 231L341 218L343 215L351 212L354 209L360 216L366 230L350 235L348 229L344 231z"
            ></path>
            <path
              className="leaflet-interactive"
              stroke="#fff"
              strokeOpacity="1"
              strokeWidth="1"
              strokeLinecap="butt"
              strokeLinejoin="miter"
              fill={randomColor()}
              fillOpacity="1"
              fillRule="evenodd"
              d="M366 206L370 207L370 213L376 216L376 219L372 226L375 225L375 227L380 232L375 235L373 241L369 240L369 238L365 235L364 238L367 241L362 240L364 237L361 232L365 230L363 222L356 212L356 210L360 206L365 206z"
            ></path>
            <path
              className="leaflet-interactive"
              stroke="#fff"
              strokeOpacity="1"
              strokeWidth="1"
              strokeLinecap="butt"
              strokeLinejoin="miter"
              fill="#FF0000"
              fillOpacity="1"
              fillRule="evenodd"
              d="M395 212L396 228L399 241L403 245L413 248L419 253L419 255L417 256L402 256L403 263L398 260L396 254L395 255L393 251L387 251L383 245L379 245L382 237L381 234L384 233L385 226L390 221L393 212L395 212z"
            ></path>
            <path
              className="leaflet-interactive"
              stroke="#fff"
              strokeOpacity="1"
              strokeWidth="1"
              strokeLinecap="butt"
              strokeLinejoin="miter"
              fill="#FF0000"
              fillOpacity="1"
              fillRule="evenodd"
              d="M388 261L388 258L391 255L393 257L396 256L398 260L403 263L403 277L392 270L389 267L388 262z"
            ></path>
            <path
              className="leaflet-interactive"
              stroke="#fff"
              strokeOpacity="1"
              strokeWidth="1"
              strokeLinecap="butt"
              strokeLinejoin="miter"
              fill="#FF0000"
              fillOpacity="1"
              fillRule="evenodd"
              d="M388 261L383 260L380 255L377 256L377 248L379 248L379 250L382 251L393 251L393 253L395 255L396 254L395 257L391 255L388 258L388 261z"
            ></path>
            <path
              className="leaflet-interactive"
              stroke="#fff"
              strokeOpacity="1"
              strokeWidth="1"
              strokeLinecap="butt"
              strokeLinejoin="miter"
              fill="#FF0000"
              fillOpacity="1"
              fillRule="evenodd"
              d="M386 261L387 264L383 268L365 256L364 258L357 256L357 258L354 257L354 255L361 250L362 247L359 245L365 247L376 246L377 255L379 255L381 259L386 261z"
            ></path>
            <path
              className="leaflet-interactive"
              stroke="#fff"
              strokeOpacity="1"
              strokeWidth="1"
              strokeLinecap="butt"
              strokeLinejoin="miter"
              fill="#FF0000"
              fillOpacity="1"
              fillRule="evenodd"
              d="M356 251L360 247L359 246L362 248L354 255L354 257L357 258L357 256L361 258L358 263L353 264L349 261L346 262L340 257L342 255L339 252L344 246L348 244L351 243L351 249L356 251z"
            ></path>
            <path
              className="leaflet-interactive"
              stroke="#fff"
              strokeOpacity="1"
              strokeWidth="1"
              strokeLinecap="butt"
              strokeLinejoin="miter"
              fill={randomColor()}
              fillOpacity="1"
              fillRule="evenodd"
              d="M342 239L344 238L353 243L350 242L346 246L344 246L324 272L319 256L325 254L328 250L326 248L324 250L323 247L328 242L327 241L330 237L342 239z"
            ></path>
            <path
              className="leaflet-interactive"
              stroke="#fff"
              strokeOpacity="1"
              strokeWidth="1"
              strokeLinecap="butt"
              strokeLinejoin="miter"
              fill={randomColor()}
              fillOpacity="1"
              fillRule="evenodd"
              d="M349 261L353 264L358 263L362 257L363 258L366 256L371 261L371 263L365 270L363 276L356 282L355 289L351 295L347 295L346 285L338 277L336 279L333 278L333 280L329 284L327 284L327 280L324 273L325 270L339 253L342 254L339 257L340 258L345 262L349 261z"
            ></path>
            <path
              className="leaflet-interactive"
              stroke="#fff"
              strokeOpacity="1"
              strokeWidth="1"
              strokeLinecap="butt"
              strokeLinejoin="miter"
              fill="#FF0000"
              fillOpacity="1"
              fillRule="evenodd"
              d="M361 232L364 237L361 240L367 241L364 238L365 235L368 236L371 241L375 239L379 243L379 245L383 245L386 248L386 250L381 251L378 248L376 248L376 246L365 247L361 245L359 245L360 248L358 250L351 249L352 246L351 243L349 243L353 243L344 238L361 232z"
            ></path>
            <path
              className="leaflet-interactive"
              stroke="#fff"
              strokeOpacity="1"
              strokeWidth="1"
              strokeLinecap="butt"
              strokeLinejoin="miter"
              fill={randomColor()}
              fillOpacity="1"
              fillRule="evenodd"
              d="M392 191L395 199L398 200L396 204L396 212L394 212L391 215L390 220L385 227L384 234L381 235L382 238L379 243L374 238L375 235L380 232L375 227L375 225L372 225L377 217L370 213L370 207L373 209L374 204L376 204L376 202L383 203L384 200L389 201L389 199L385 196L386 195L383 194L386 193L387 187L392 191z"
            ></path>
            <path
              className="leaflet-interactive"
              stroke="#fff"
              strokeOpacity="1"
              strokeWidth="1"
              strokeLinecap="butt"
              strokeLinejoin="miter"
              fill={randomColor()}
              fillOpacity="1"
              fillRule="evenodd"
              d="M287 304L287 306L291 306L289 308L290 309L294 301L302 301L294 311L294 313L285 309L284 316L282 316L275 310L280 303L276 301L273 298L275 298L274 297L271 298L266 293L266 288L271 287L276 298L281 293L288 289L288 297L286 301L287 304z"
            ></path>
            <path
              className="leaflet-interactive"
              stroke="#fff"
              strokeOpacity="1"
              strokeWidth="1"
              strokeLinecap="butt"
              strokeLinejoin="miter"
              fill="#FF0000"
              fillOpacity="1"
              fillRule="evenodd"
              d="M323 337L319 341L318 337L314 339L296 334L293 335L288 332L289 331L287 327L283 326L324 272L327 284L329 284L333 280L333 278L336 279L338 277L346 285L347 295L351 295L349 298L349 302L353 301L366 291L369 293L373 300L374 314L367 313L366 323L359 322L349 304L349 306L344 311L345 314L336 331L330 337L323 337z"
            ></path>
            <path
              className="leaflet-interactive"
              stroke="#fff"
              strokeOpacity="1"
              strokeWidth="1"
              strokeLinecap="butt"
              strokeLinejoin="miter"
              fill={randomColor()}
              fillOpacity="1"
              fillRule="evenodd"
              d="M383 268L387 264L386 261L388 261L389 268L403 277L402 289L403 300L405 303L391 306L392 315L381 316L381 320L385 320L387 318L387 320L386 325L382 327L379 331L379 329L377 328L374 329L372 323L370 325L366 323L366 315L373 314L373 300L371 295L366 291L349 303L349 299L352 292L355 289L356 282L364 274L365 270L369 266L371 261L380 265L383 268z"
            ></path>
            <path
              className="leaflet-interactive"
              stroke="#fff"
              strokeOpacity="1"
              strokeWidth="1"
              strokeLinecap="butt"
              strokeLinejoin="miter"
              fill={randomColor()}
              fillOpacity="1"
              fillRule="evenodd"
              d="M233 347L244 334L249 325L256 326L256 330L262 334L262 332L263 333L265 331L266 334L270 337L276 330L277 326L275 321L270 317L276 310L278 313L284 316L284 310L287 309L293 313L284 326L289 330L288 332L290 334L301 335L314 339L318 337L318 341L320 341L325 336L327 339L327 343L336 351L332 355L332 361L317 362L306 353L296 369L282 366L280 364L276 371L270 371L268 369L263 368L263 364L253 356L246 354L243 351L241 351L238 347L233 347z"
            ></path>
            <path
              className="leaflet-interactive"
              stroke="#fff"
              strokeOpacity="1"
              strokeWidth="1"
              strokeLinecap="butt"
              strokeLinejoin="miter"
              fill={randomColor()}
              fillOpacity="1"
              fillRule="evenodd"
              d="M437 195L432 201L430 201L430 207L432 207L429 208L429 210L426 213L424 213L425 210L421 210L418 205L423 194L426 193L427 189L430 186L437 195z"
            ></path>
            <path
              className="leaflet-interactive"
              stroke="#fff"
              strokeOpacity="1"
              strokeWidth="1"
              strokeLinecap="butt"
              strokeLinejoin="miter"
              fill={randomColor()}
              fillOpacity="1"
              fillRule="evenodd"
              d="M389 329L388 330L390 330L381 338L380 345L384 349L386 349L384 355L390 355L382 358L376 358L370 355L366 358L363 357L363 355L357 351L357 345L363 348L368 347L363 344L361 346L358 344L358 342L360 342L363 337L365 326L367 324L370 325L372 323L374 329L377 328L380 331L384 326L388 328L389 327L389 329z"
            ></path>
            <path
              className="leaflet-interactive"
              stroke="#fff"
              strokeOpacity="1"
              strokeWidth="1"
              strokeLinecap="butt"
              strokeLinejoin="miter"
              fill={randomColor()}
              fillOpacity="1"
              fillRule="evenodd"
              d="M336 331L346 312L344 311L349 306L349 304L354 311L357 319L361 323L366 324L361 339L358 336L354 340L349 337L346 341L343 339L345 337L344 334L342 335L340 333L339 338L342 341L342 343L339 348L336 347L337 344L335 342L334 347L330 347L330 345L327 344L327 337L330 337L333 334z"
            ></path>
            <path
              className="leaflet-interactive"
              stroke="#fff"
              strokeOpacity="1"
              strokeWidth="1"
              strokeLinecap="butt"
              strokeLinejoin="miter"
              fill={randomColor()}
              fillOpacity="1"
              fillRule="evenodd"
              d="M285 246L286 252L271 266L269 264L270 261L265 256L267 248L275 248L278 245L281 246L285 244L284 245zM195 159L204 164L214 165L214 161L216 163L215 164L223 166L223 172L230 177L237 177L239 169L244 172L263 178L263 181L267 183L266 185L270 185L271 195L265 202L263 203L259 199L253 199L249 197L249 199L251 199L250 204L252 206L250 212L255 216L250 218L251 225L271 227L276 225L277 226L274 227L274 229L277 230L270 235L272 237L265 245L265 243L261 241L261 239L253 245L243 238L234 237L225 253L222 251L221 256L217 257L211 251L203 249L194 242L196 238L197 227L204 216L190 204L198 192L198 186L196 184L198 180L189 171L187 171L190 164L195 159z"
            ></path>
            <path
              className="leaflet-interactive"
              stroke="#fff"
              strokeOpacity="1"
              strokeWidth="1"
              strokeLinecap="butt"
              strokeLinejoin="miter"
              fill={randomColor()}
              fillOpacity="1"
              fillRule="evenodd"
              d="M392 156L386 154L379 147L377 144L377 136L381 138L386 144L393 143L397 145L393 149L391 149L392 156zM428 185L429 186L418 206L420 210L425 209L423 213L415 212L396 205L399 193L398 188L395 185L395 183L393 183L395 175L395 163L397 161L401 166L408 169L415 168L414 171L416 171L416 175L413 180L418 187L428 185z"
            ></path>
            <path
              className="leaflet-interactive"
              stroke="#fff"
              strokeOpacity="1"
              strokeWidth="1"
              strokeLinecap="butt"
              strokeLinejoin="miter"
              fill={randomColor()}
              fillOpacity="1"
              fillRule="evenodd"
              d="M296 369L306 353L317 362L332 361L332 355L336 351L334 343L335 342L337 344L336 347L339 348L342 343L342 341L339 338L339 333L341 335L343 334L343 336L345 337L343 339L345 341L349 337L354 340L358 336L361 339L361 341L359 341L358 344L361 346L363 344L368 346L363 348L357 344L357 350L358 352L363 354L362 357L365 358L371 355L376 358L382 358L386 356L388 356L389 358L385 361L384 368L374 364L369 368L367 373L363 371L357 373L357 375L354 378L335 387L335 381L331 381L327 377L322 375L322 381L319 384L310 383L299 377L298 374L300 372L296 369z"
            ></path>
            <path
              className="leaflet-interactive"
              stroke="#fff"
              strokeOpacity="1"
              strokeWidth="1"
              strokeLinecap="butt"
              strokeLinejoin="miter"
              fill="#FF0000"
              fillOpacity="1"
              fillRule="evenodd"
              d="M431 341L430 342L428 340L423 343L426 347L422 350L425 357L424 358L422 354L419 354L419 359L417 359L415 357L417 354L415 354L416 351L407 346L407 344L410 343L410 339L416 339L414 337L418 333L415 332L413 334L411 330L414 329L411 326L419 318L425 326L424 327L426 331L432 335L430 337L433 340L435 340L434 343L431 341z"
            ></path>
            <path
              className="leaflet-interactive"
              stroke="#fff"
              strokeOpacity="1"
              strokeWidth="1"
              strokeLinecap="butt"
              strokeLinejoin="miter"
              fill={randomColor()}
              fillOpacity="1"
              fillRule="evenodd"
              d="M384 337L383 336L389 330L388 331L389 326L387 328L385 326L387 318L385 320L381 320L381 316L392 315L391 306L402 304L402 306L406 310L407 315L405 316L405 318L403 318L404 321L402 321L402 319L400 323L407 326L408 325L407 326L410 327L411 326L414 329L411 330L411 335L409 335L407 331L401 333L397 331L394 336L388 335L384 337z"
            ></path>
          </g>
        </svg>
      </div>
    </div>
    <div className="leaflet-control-container">
      <div className="leaflet-top leaflet-left">
        <div className="leaflet-control-zoom leaflet-bar leaflet-control">
          <a
            className="leaflet-control-zoom-in"
            href="#"
            title="Zoom in"
            role="button"
            aria-label="Zoom in"
            aria-disabled="false"
          >
            <span aria-hidden="true">+</span>
          </a>
          <a
            className="leaflet-control-zoom-out"
            href="#"
            title="Zoom out"
            role="button"
            aria-label="Zoom out"
            aria-disabled="false"
          >
            <span aria-hidden="true">−</span>
          </a>
        </div>
      </div>
      <div className="leaflet-top leaflet-right"></div>
      <div className="leaflet-bottom leaflet-left"></div>
      <div className="leaflet-bottom leaflet-right">
        <div className="leaflet-control-attribution leaflet-control">
          <a
            href="https://leafletjs.com"
            title="A JavaScript library for interactive maps"
          >
            <svg
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="8"
              viewBox="0 0 12 8"
              className="leaflet-attribution-flag"
            >
              <path fill="#4C7BE1" d="M0 0h12v4H0z"></path>
              <path fill="#FFD500" d="M0 4h12v3H0z"></path>
              <path fill="#E0BC00" d="M0 7h12v1H0z"></path>
            </svg>{" "}
            Leaflet
          </a>
        </div>
      </div>
    </div>
  </div>;
  
  </div>
  )
}

export default Analytics