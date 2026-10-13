
/* Funciones de prueba para index.html. No modifica Template Links. */
const SUPABASE_URL = "https://ngkygzwqtwxcggukqznj.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_D3k7urSeKP8aR0ypEdrOXw_6-sxarN-";
let supabaseClient = null;
try { if (window.supabase && window.supabase.createClient) supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY); } catch (e) { console.warn(e); }

const DEFAULT_DICTIONARY = [
      { keyword: "Cubs de Chicago", url: "https://www.elnuevodia.com/topicos/cubs-de-chicago/" },
      { keyword: "Twins de Minnesota", url: "https://www.elnuevodia.com/topicos/twins-de-minnesota/" },
      { keyword: "White Sox de Chicago", url: "https://www.elnuevodia.com/topicos/white-sox-de-chicago/" },
      { keyword: "Rays de Tampa Bay", url: "https://www.elnuevodia.com/topicos/rays-de-tampa-bay/" },
      { keyword: "Yankees de Nueva York", url: "https://www.elnuevodia.com/topicos/yankees-de-nueva-york/" },
      { keyword: "Red Sox de Boston", url: "https://www.elnuevodia.com/topicos/red-sox-de-boston/" },
      { keyword: "Orioles de Baltimore", url: "https://www.elnuevodia.com/topicos/orioles-de-baltimore/" },
      { keyword: "Blue Jays de Toronto", url: "https://www.elnuevodia.com/topicos/blue-jays-de-toronto/" },
      { keyword: "Guardians de Cleveland", url: "https://www.elnuevodia.com/topicos/guardians-de-cleveland/" },
      { keyword: "Tigers de Detroit", url: "https://www.elnuevodia.com/topicos/tigers-de-detroit/" },
      { keyword: "Royals de Kansas City", url: "https://www.elnuevodia.com/topicos/royals-de-kansas-city/" },
      { keyword: "Astros de Houston", url: "https://www.elnuevodia.com/topicos/astros-de-houston/" },
      { keyword: "Rangers de Texas", url: "https://www.elnuevodia.com/topicos/rangers-de-texas/" },
      { keyword: "Mariners de Seattle", url: "https://www.elnuevodia.com/topicos/mariners-de-seattle/" },
      { keyword: "Athletics", url: "https://www.elnuevodia.com/topicos/athletics-de-oakland/" },
      { keyword: "Angels de Los Ángeles", url: "https://www.elnuevodia.com/topicos/angels-de-los-angeles/" },
      { keyword: "Braves de Atlanta", url: "https://www.elnuevodia.com/topicos/braves-de-atlanta/" },
      { keyword: "Phillies de Filadelfia", url: "https://www.elnuevodia.com/topicos/phillies-de-philadelphia/" },
      { keyword: "Marlins de Miami", url: "https://www.elnuevodia.com/topicos/marlins-de-miami/" },
      { keyword: "Nationals de Washington", url: "https://www.elnuevodia.com/topicos/nationals-de-washington/" },
      { keyword: "Mets de Nueva York", url: "https://www.elnuevodia.com/topicos/mets-de-nueva-york/" },
      { keyword: "Brewers de Milwaukee", url: "https://www.elnuevodia.com/topicos/brewers-de-milwaukee/" },
      { keyword: "Pirates de Pittsburgh", url: "https://www.elnuevodia.com/topicos/pirates-de-pittsburgh/" },
      { keyword: "Cardinals de San Luis", url: "https://www.elnuevodia.com/topicos/cardinals-de-san-luis/" },
      { keyword: "Dodgers de Los Ángeles", url: "https://www.elnuevodia.com/topicos/dodgers-de-los-angeles/" },
      { keyword: "Padres de San Diego", url: "https://www.elnuevodia.com/topicos/padres-de-san-diego/" },
      { keyword: "Diamondbacks de Arizona", url: "https://www.elnuevodia.com/topicos/diamondbacks-de-arizona/" },
      { keyword: "Giants de San Francisco", url: "https://www.elnuevodia.com/topicos/giants-de-san-francisco/" },
      { keyword: "Rockies de Colorado", url: "https://www.elnuevodia.com/topicos/rockies-de-colorado/" },
      { keyword: "Reds de Cincinnati", url: "https://www.elnuevodia.com/topicos/reds-de-cincinnati/" }
    ];
const DEFAULT_ANGLICISM_REGEX = /\b(?:inning|innings|playoff|playoffs|wild\s+card|wild\s+cards|home\s+run|home\s+runs|pitcher|pitchers|catcher|catchers|bullpen|closer|closers|reliever|relievers|starter|starters|out|outs|hit|hits|strike|strikes|walk|walks|double|doubles|triple|triples|slider|sliders|changeup|changeups|curveball|curveballs|fastball|fastballs|sinker|sinkers|sweeper|sweepers|splitter|splitters|lineup|lineups|batting\s+order|designated\s+hitter|designated\s+hitters|draft|passed\s+ball|passed\s+balls|wild\s+pitch|wild\s+pitches|balk|balks|walk[-\s]?off|sacrifice\s+fly|sacrifice\s+flies|sacrifice\s+bunt|sacrifice\s+bunts|stolen\s+base|stolen\s+bases|caught\s+stealing|pickoff|pickoffs|double\s+play|double\s+plays|triple\s+play|triple\s+plays|force\s+out|force\s+outs|tag\s+out|tag\s+outs|groundout|groundouts|flyout|flyouts|strikeout|strikeouts|grand\s+slam|grand\s+slams|shutout|shutouts|no[-\s]?hitter|no[-\s]?hitters|perfect\s+game|perfect\s+games|lead[-\s]?off|leadoff|pinch\s+hitter|pinch\s+hitters|pinch\s+runner|pinch\s+runners|utility\s+player|utility\s+players|prospect|prospects|rookie|rookies|spring\s+training|trade\s+deadline|waiver|waivers|all[-\s]?star|all[-\s]?stars|home\s+run\s+derby|home\s+plate|home|plate|plates|cutter|cutters|derby|batter|batters|batting|bat|bats|shortstop|shortstops|third\s+baseman|third\s+basemen|second\s+baseman|second\s+basemen|first\s+baseman|first\s+basemen|outfielder|outfielders|infielder|infielders|outfield|infield|dugout|dugouts|on[-\s]?deck|on[-\s]?base|on[-\s]?deck|batting\s+practice|batting\s+coach|base\s+coach|first\s+base|second\s+base|third\s+base|home\s+run|grand\s+slam|inside[-\s]?the[-\s]?park|sac\s+fly|sacrifice\s+fly|sac\s+bunt|sacrifice\s+bunt|hit[-\s]?by[-\s]?pitch|hit\s+by\s+pitch|intentional\s+walk|walk\s+off|walk[-\s]?off|run[-\s]?batted[-\s]?in|runs[-\s]?batted[-\s]?in|RBI|ERA|WHIP|OPS|OBP|SLG|BABIP|WAR|FIP|QS|save|saves|hold|holds|blown\s+save|blown\s+saves|setup\s+man|setup\s+men|middle\s+reliever|middle\s+relievers|long\s+reliever|long\s+relievers|left[-\s]?hander|right[-\s]?hander|lefty|lefties|righty|righties|switch[-\s]?hitter|switch[-\s]?hitters|utility\s+man|utility\s+men|utility\s+infielder|utility\s+infielders|utility\s+outfielder|utility\s+outfielders|catcher\s+interference|pitch\s+clock|pitch\s+com|ghost\s+runner|runner\s+on\s+second|bases[-\s]?loaded|loaded\s+bases|inside\s+corner|outside\s+corner|inside\s+pitch|outside\s+pitch|high\s+fastball|low\s+fastball|breaking\s+ball|breaking\s+balls|off[-\s]?speed|off[-\s]?speed\s+pitch|two[-\s]?seamer|four[-\s]?seamer|four[-\s]?seam|two[-\s]?seam|curve|curves|knuckleball|knuckleballs|knuckle[-\s]?curve|knuckle[-\s]?curves|forkball|forkballs|splitter|splitters|sinker|sinkers|sweeper|sweepers|slider|sliders|changeup|changeups|fastball|fastballs|cutter|cutters|slugging|slugger|sluggers|batting\s+average|on[-\s]?base\s+percentage|slugging\s+percentage|fastbreak|fast\s+break|half\s+court|full\s+court|frontcourt|backcourt|point\s+guard|shooting\s+guard|small\s+forward|power\s+forward|center|centers|forward|forwards|guard|guards|sixth\s+man|sixth\s+woman|pick\s+and\s+roll|pick\s+and\s+pop|pick\s+and\s+rolls|alley[-\s]?oop|slam\s+dunk|dunk|dunks|layup|layups|tip[-\s]?in|tip[-\s]?ins|jump\s+shot|jumpers|jumper|fadeaway|fadeaway\s+jumper|hook\s+shot|bank\s+shot|three[-\s]?pointer|three[-\s]?pointers|two[-\s]?pointer|two[-\s]?pointers|free\s+throw|free\s+throws|turnover|turnovers|steal|steals|block|blocks|assist|assists|rebound|rebounds|box\s+out|box\s+outs|double[-\s]?double|triple[-\s]?double|quadruple[-\s]?double|buzzer[-\s]?beater|game[-\s]?winner|game[-\s]?winning|shot\s+clock|shot\s+creator|rim\s+protector|stretch\s+four|two[-\s]?way|two[-\s]?way\s+player|playmaker|playmakers|ball\s+handler|ball\s+handlers|spacing|switch|switches|switching|mismatch|mismatches|screen|screens|screening|closeout|closeouts|rotation|rotations|transition|pace|pick\s+and\s+roll|NBA\s+draft|lottery\s+pick|lottery\s+picks|undrafted|rookie\s+scale|salary\s+cap|hard\s+cap|luxury\s+tax|trade\s+exception|two[-\s]?way\s+contract|buyout|buyouts|waiver\s+wire|free\s+agency|free\s+agent|free\s+agents|play[-\s]?in|home\s+court|road\s+game|road\s+games|clutch|clutch\s+time|overtime|shot|shots|par|birdie|birdies|eagle|eagles|albatross|albatrosses|bogey|bogeys|double\s+bogey|double\s+bogeys|tee|tees|tee\s+box|fairway|fairways|rough|green|greens|putt|putts|putter|putters|putting|drive|drives|driver|drivers|approach|approaches|approach\s+shot|approach\s+shots|chip|chips|chipping|pitch|pitches|pitching|bunker|bunkers|sand\s+trap|sand\s+traps|hazard|hazards|water\s+hazard|water\s+hazards|golf\s+cart|caddie|caddies|clubhouse|links|links\s+course|stroke|strokes|stroke\s+play|match\s+play|medal\s+play|cut|cuts|made\s+the\s+cut|missed\s+the\s+cut|leaderboard|leaderboards|major|majors|round|rounds|final\s+round|opening\s+round|back\s+nine|front\s+nine|nine\s+holes|18\s+holes|par[-\s]?3|par[-\s]?4|par[-\s]?5|one[-\s]?under|two[-\s]?under|three[-\s]?under|one[-\s]?over|two[-\s]?over|three[-\s]?over|under\s+par|over\s+par|tee\s+time|gimme|gimme\s+putt|boxing|boxer|boxers|fight|fights|fighter|fighters|bout|bouts|title\s+fight|title\s+fights|championship\s+bout|contender|contenders|challenger|challengers|undisputed|unified|unification|knockout|knockouts|knockout\s+artist|TKO|KO|technical\s+knockout|technical\s+knockouts|knockdown|knockdowns|count|counts|standing\s+eight|corner|cornermen|cutman|cutmen|ring|ringside|ring\s+walk|weigh[-\s]?in|weigh[-\s]?ins|weight\s+class|weight\s+classes|heavyweight|lightweight|welterweight|middleweight|bantamweight|featherweight|flyweight|super\s+heavyweight|super\s+middleweight|super\s+welterweight|super\s+lightweight|super\s+featherweight|super\s+bantamweight|southpaw|orthodox|jab|jabs|cross|crosses|hook|hooks|uppercut|uppercuts|body\s+shot|body\s+shots|combination|combinations|counterpunch|counterpunches|head\s+shot|head\s+shots|punch|punches|power\s+punch|power\s+punches|clean\s+shot|clean\s+shots|decision|decisions|split\s+decision|majority\s+decision|unanimous\s+decision|draw|draws|technical\s+decision|referee|referees|judges|judge|scorecard|scorecards|rounds|bell|bells|NFL|football|quarterback|quarterbacks|QB|running\s+back|running\s+backs|wide\s+receiver|wide\s+receivers|tight\s+end|tight\s+ends|offensive\s+line|defensive\s+line|lineman|linemen|defensive\s+back|defensive\s+backs|cornerback|cornerbacks|safety|safeties|linebacker|linebackers|fullback|fullbacks|slot\s+receiver|slot\s+receivers|pass\s+rusher|pass\s+rushers|edge\s+rusher|edge\s+rushers|special\s+teams|placekicker|placekickers|kicker|kickers|punter|punters|long\s+snapper|long\s+snappers|kickoff|kickoffs|punt|punts|fair\s+catch|fair\s+catches|touchdown|touchdowns|extra\s+point|extra\s+points|field\s+goal|field\s+goals|two[-\s]?point\s+conversion|two[-\s]?point\s+conversions|conversion|conversions|safety|safeties|fumble|fumbles|fumble\s+recovery|fumble\s+recoveries|interception|interceptions|pick[-\s]?six|pass\s+interference|defensive\s+pass\s+interference|offensive\s+pass\s+interference|holding|false\s+start|offsides|offside|encroachment|neutral\s+zone\s+infraction|delay\s+of\s+game|roughing\s+the\s+passer|roughing\s+the\s+kicker|illegal\s+contact|personal\s+foul|face\s+mask|facemask|taunting|unsportsmanlike\s+conduct|horse[-\s]?collar|tackle|tackles|tackling|sack|sacks|blitz|blitzes|blitzing|coverage|man\s+coverage|zone\s+coverage|press\s+coverage|red\s+zone|end\s+zone|goal\s+line|first\s+down|first\s+downs|third\s+down|fourth\s+down|two[-\s]?minute\s+warning|hurry[-\s]?up|no[-\s]?huddle|shotgun|shotgun\s+formation|wildcat|play\s+action|play[-\s]?action|read\s+option|option\s+play|screen\s+pass|deep\s+ball|deep\s+pass|pass\s+rush|run\s+game|passing\s+game|running\s+game|turnover\s+margin|time\s+of\s+possession|drive|drives|three[-\s]?and[-\s]?out|two[-\s]?minute\s+drill|game\s+clock|playoff\s+berth|wild\s+card|bye|bye\s+week|home\s+field|road\s+game|franchise\s+tag|salary\s+cap|free\s+agency|free\s+agent|trade\s+deadline|waiver\s+wire|practice\s+squad|active\s+roster|depth\s+chart|roster|rosters|starter|starters|head\s+coach|offensive\s+coordinator|defensive\s+coordinator|special\s+teams\s+coordinator|play\s+caller|play\s+calling|snap|snaps|line\s+of\s+scrimmage|preseason|regular\s+season|Super\s+Bowl|Pro\s+Bowl)\b/gi;
let dictionary = [...DEFAULT_DICTIONARY].sort((a, b) => b.keyword.length - a.keyword.length);
let anglicismTerms = [];
let dictionaryFromSupabase = false;
let anglicismsFromSupabase = false;
let autoProcessTimer = null;
const AUTO_PROCESS_DELAY = 700;

function getDefaultAnglicismTerms() {
      const source = DEFAULT_ANGLICISM_REGEX.source;
      const match = source.match(/\\b\(\?:([\s\S]+)\)\\b/);
      if (!match) return [];

      const seen = new Set();
      return match[1].split('|')
        .filter(pattern => pattern !== 'par')
        .map(pattern => ({
          term: pattern
            .replace(/\\s\+/g, ' ')
            .replace(/\[-\\s\]\?/g, '-')
            .replace(/\[-\\s\]/g, '-')
            .replace(/\\s\?/g, ' ')
            .replace(/\\/g, ''),
          pattern
        }))
        .filter(item => {
          const key = item.term.trim().toLocaleLowerCase('es');
          if (!key || key === 'par' || seen.has(key)) return false;
          seen.add(key);
          return true;
        });
    }
function getAnglicismRegex() {
      const patterns = anglicismsFromSupabase && anglicismTerms.length
        ? anglicismTerms.map(item => item.pattern).filter(Boolean)
        : getDefaultAnglicismTerms().map(item => item.pattern);

      if (!patterns.length) return /$a/gi;
      return new RegExp(`\\b(?:${patterns.join('|')})\\b`, 'gi');
    }
function applyNumericFormatting(text) {
      let formatted = text;
      formatted = formatted.replace(/\b\d{1,3}(?:\.\d{3})+\b/g, match =>
        match.replace(/\./g, ',')
      );
      formatted = formatted.replace(/\b\d+,\d{1,2}\b/g, match =>
        match.replace(',', '.')
      );

      const pitchingUnits = '(?:entrada|entradas|episodio|episodios|inning|innings)';
      formatted = formatted.replace(
        new RegExp('\\b(\\d+)\\s+1\\/3(?=\\s+' + pitchingUnits + '\\b)', 'gi'),
        '$1.1'
      );
      formatted = formatted.replace(
        new RegExp('\\b(\\d+)\\s+2\\/3(?=\\s+' + pitchingUnits + '\\b)', 'gi'),
        '$1.2'
      );

      formatted = formatted.replace(
        /\b(\d+)\s+1\/2(?=\s+(?:juego|juegos|partido|partidos|encuentro|encuentros|desafío|desafíos)(?=\s|[.,;:!?]|$))/gi,
        '$1.5'
      );

      const gameNumbers = {
        '1': 'primer',
        '2': 'segundo',
        '3': 'tercer',
        '4': 'cuarto',
        '5': 'quinto',
        '6': 'sexto',
        '7': 'séptimo'
      };
      formatted = formatted.replace(/\bJuego\s+([1-7])\b/gi, (match, number) =>
        `${gameNumbers[number]} juego`
      );

      // Regla ampliada: tercios con cualquier unidad o palabra posterior.
      formatted = formatted.replace(/\b(\d+)\s+1\/3(?=\s+[A-Za-zÁÉÍÓÚÜÑáéíóúüñ])/gi, '$1.1');
      formatted = formatted.replace(/\b(\d+)\s+2\/3(?=\s+[A-Za-zÁÉÍÓÚÜÑáéíóúüñ])/gi, '$1.2');

      return formatted;
    }
function forEachTextNode(root, callback) {
      const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
      const nodes = [];
      let node;
      while ((node = walker.nextNode())) {
        if (node.parentElement && !node.parentElement.closest('a, script, style, em')) {
          nodes.push(node);
        }
      }
      nodes.forEach(callback);
    }
function autoItalicizeEnglishSportsTerms(root) {
      const regex = getAnglicismRegex();

      forEachTextNode(root, node => {
        regex.lastIndex = 0;
        if (!regex.test(node.nodeValue)) return;
        regex.lastIndex = 0;
        const frag = document.createDocumentFragment();
        let last = 0;
        let match;
        while ((match = regex.exec(node.nodeValue))) {
          if (match.index > last) {
            frag.appendChild(document.createTextNode(node.nodeValue.slice(last, match.index)));
          }
          if (match[0].toLocaleLowerCase('es') === 'par') {
            continue;
          }
          const em = document.createElement('em');
          em.textContent = match[0];
          frag.appendChild(em);
          last = match.index + match[0].length;
        }
        if (last < node.nodeValue.length) {
          frag.appendChild(document.createTextNode(node.nodeValue.slice(last)));
        }
        node.parentNode.replaceChild(frag, node);
      });
    }
function linkDictionaryTerms(root, replaceMode, isBold, isBlank) {
      let total = 0;
      const matchedTopicsSet = new Set();

      // El editor se procesa directamente: conserva como ya enlazados los tópicos
      // que se procesaron en una ejecución anterior para no enlazar la segunda mención.
      root.querySelectorAll('a[href]').forEach(anchor => {
        const anchorUrl = (anchor.href || '').toLowerCase().replace(/\\/$/, '');
        const anchorText = (anchor.textContent || '').trim().toLocaleLowerCase('es');
        dictionary.forEach(item => {
          if (!item.keyword || !item.url) return;
          const topicKey = item.url.toLowerCase().replace(/\\/$/, '');
          if (anchorUrl === topicKey && anchorText === item.keyword.trim().toLocaleLowerCase('es')) {
            matchedTopicsSet.add(topicKey);
          }
        });
      });

      dictionary.forEach(item => {
        if (!item.keyword || !item.keyword.trim()) return;

        const topicKey = (item.url || item.keyword).toLowerCase().replace(/\/$/, '');
        if (replaceMode === 'first' && matchedTopicsSet.has(topicKey)) return;

        const escapedKw = item.keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const boundaryEnd = /\.$/.test(item.keyword) ? '' : '\\b';
        const regex = new RegExp(`\\b(${escapedKw})${boundaryEnd}`, replaceMode === 'all' ? 'gi' : 'i');

        let linkedForTopic = false;

        forEachTextNode(root, node => {
          if (replaceMode === 'first' && matchedTopicsSet.has(topicKey)) return;
          if (!node.nodeValue || !node.nodeValue.trim()) return;

          regex.lastIndex = 0;
          if (!regex.test(node.nodeValue)) return;
          regex.lastIndex = 0;

          const value = node.nodeValue;
          const frag = document.createDocumentFragment();
          let last = 0;
          let match;
          let changed = false;

          while ((match = regex.exec(value))) {
            if (replaceMode === 'first' && linkedForTopic) break;

            if (match.index > last) {
              frag.appendChild(document.createTextNode(value.slice(last, match.index)));
            }

            const a = document.createElement('a');
            a.href = item.url;
            a.textContent = match[0];
            if (isBlank) {
              a.target = '_blank';
              a.rel = 'noopener';
            }

            if (isBold) {
              const strong = document.createElement('strong');
              strong.appendChild(a);
              frag.appendChild(strong);
            } else {
              frag.appendChild(a);
            }

            last = match.index + match[0].length;
            linkedForTopic = true;
            matchedTopicsSet.add(topicKey);
            total++;
            changed = true;

            if (replaceMode === 'first') break;
          }

          if (changed) {
            if (last < value.length) {
              frag.appendChild(document.createTextNode(value.slice(last)));
            }
            node.parentNode.replaceChild(frag, node);
          }
        });
      });

      return total;
    }

async function loadSharedDictionaries() {
  if (!supabaseClient) return;
  try {
    const {data,error} = await supabaseClient.from('dictionary_terms').select('id, keyword, url').order('keyword',{ascending:true});
    if (!error && Array.isArray(data) && data.length) {
      dictionary=data.filter(x=>x.keyword&&x.url).map(x=>({id:x.id,keyword:x.keyword,url:x.url})).sort((x,y)=>y.keyword.length-x.keyword.length);
      dictionaryFromSupabase=true;
    } else if (error) console.warn('Diccionario central no disponible; se usa la lista predeterminada.',error);
  } catch(e) { console.warn(e); }
  try {
    const {data,error}=await supabaseClient.from('anglicism_terms').select('id, term, pattern').order('term',{ascending:true});
    if (!error && Array.isArray(data) && data.length) {
      anglicismTerms=data.filter(x=>x.term&&x.pattern&&x.term.trim().toLocaleLowerCase('es')!=='par').map(x=>({id:x.id,term:x.term.trim(),pattern:x.pattern}));
      anglicismsFromSupabase=anglicismTerms.length>0;
    } else if (error) console.warn('Lista central de anglicismos no disponible; se usa la predeterminada.',error);
  } catch(e) { console.warn(e); }
  scheduleAutoProcessing();
}

function getCaretTextOffset(root, range) {
  const before=range.cloneRange(); before.selectNodeContents(root); before.setEnd(range.startContainer,range.startOffset); return before.toString().length;
}
function restoreCaretTextOffset(root, offset) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  let node, remaining = Math.max(0, offset);
  while ((node = walker.nextNode())) {
    if (remaining <= node.nodeValue.length) {
      const range = document.createRange();
      const wrapper = node.parentElement && node.parentElement.closest('a, em');
      // Si el cursor quedó al final de un tópico enlazado o anglicismo en cursiva,
      // colócalo después del formato para que la próxima tecla no quede dentro del enlace/cursiva.
      if (wrapper && remaining === node.nodeValue.length) range.setStartAfter(wrapper);
      else range.setStart(node, remaining);
      range.collapse(true);
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
      return;
    }
    remaining -= node.nodeValue.length;
  }
  const range = document.createRange();
  range.selectNodeContents(root);
  range.collapse(false);
  const selection = window.getSelection();
  selection.removeAllRanges();
  selection.addRange(range);
}
function processEditorContent() {
  clearTimeout(autoProcessTimer); autoProcessTimer=null;
  if(!editor.innerText.trim()) return;
  const sel=window.getSelection(); let caret=null;
  if(sel&&sel.rangeCount&&editor.contains(sel.anchorNode)) caret=getCaretTextOffset(editor,sel.getRangeAt(0));
  forEachTextNode(editor,node=>{const changed=applyNumericFormatting(node.nodeValue);if(changed!==node.nodeValue)node.nodeValue=changed;});
  linkDictionaryTerms(editor,'first',true,true);
  autoItalicizeEnglishSportsTerms(editor);
  if(caret!==null&&document.activeElement===editor) restoreCaretTextOffset(editor,caret);
  actualizarContador();
  try { localStorage.setItem('articulo_fijo_borrador',editor.innerHTML); } catch(e) {}
}
function scheduleAutoProcessing(){clearTimeout(autoProcessTimer);autoProcessTimer=setTimeout(processEditorContent,AUTO_PROCESS_DELAY);}

function saveDraftToComputer() {
  if(!editor.innerText.trim()){alert('No hay texto en el borrador para guardar.');return;}
  const d=new Date(),stamp=[d.getFullYear(),String(d.getMonth()+1).padStart(2,'0'),String(d.getDate()).padStart(2,'0')].join('-')+'_'+[String(d.getHours()).padStart(2,'0'),String(d.getMinutes()).padStart(2,'0')].join('-');
  let filename=prompt('¿Qué nombre quieres ponerle a la copia?','Borrador END - '+stamp+'.html');
  if(filename===null)return; filename=filename.trim().replace(/[\\/:*?"<>|]/g,'-');
  if(!filename){alert('Escribe un nombre para la copia.');return;} if(!/\.html?$/i.test(filename))filename+='.html';
  const snapshot={version:1,savedAt:new Date().toISOString(),editorHtml:editor.innerHTML,filename:globalFilenameInput.value};
  const json=JSON.stringify(snapshot).replace(/</g,'\\u003c').replace(/>/g,'\\u003e').replace(/&/g,'\\u0026');
  const html='<!doctype html><html lang="es"><head><meta charset="utf-8"><title>Borrador END</title></head><body><h1>Borrador de El Nuevo Día</h1><div>'+editor.innerHTML+'</div><script type="application/json" id="end-index-draft">'+json+'</scr'+'ipt></body></html>';
  const url=URL.createObjectURL(new Blob([html],{type:'text/html;charset=utf-8'}));const a=document.createElement('a');a.href=url;a.download=filename;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);
}
function loadDraftFromComputer(file) {
  if(!file||!confirm('¿Quieres reemplazar el texto actual con la copia seleccionada? El contenido actual se sustituirá.'))return;
  file.text().then(html=>{
    const parsed=new DOMParser().parseFromString(html,'text/html'),node=parsed.getElementById('end-index-draft');
    if(!node)throw new Error('El archivo no contiene un borrador recuperable de esta plantilla.');
    const snapshot=JSON.parse(node.textContent||'{}');
    if(snapshot.version!==1||typeof snapshot.editorHtml!=='string')throw new Error('El archivo no contiene un borrador válido.');
    editor.innerHTML=snapshot.editorHtml;
    if(typeof snapshot.filename==='string')globalFilenameInput.value=snapshot.filename;
    actualizarContador();localStorage.setItem('articulo_fijo_borrador',editor.innerHTML);localStorage.setItem('articulo_fijo_nombre',globalFilenameInput.value);
    scheduleAutoProcessing();alert('Borrador recuperado desde tu computadora.');
  }).catch(e=>alert(e.message||'No se pudo recuperar la copia local.'));
}
async function compartirTexto() {
  const text='DEPORTES - El Nuevo Día\nPor: Antolín Maldonado Ríos\n\n'+editor.innerText;
  if(!editor.innerText.trim()){alert('No hay texto para compartir.');return;}
  if(navigator.share){try{await navigator.share({title:'Borrador de El Nuevo Día',text});}catch(e){if(e&&e.name!=='AbortError'){try{await navigator.clipboard.writeText(text);alert('No se pudo abrir el menú para compartir. El texto se copió para pegarlo donde quieras.');}catch(_){window.prompt('Copia el texto para compartir:',text);}}}}
  else{try{await navigator.clipboard.writeText(text);alert('El texto se copió. Puedes pegarlo donde quieras.');}catch(_){window.prompt('Copia el texto para compartir:',text);}}
}

document.getElementById('btnSaveLocalDraft').addEventListener('click',saveDraftToComputer);
document.getElementById('btnLoadLocalDraft').addEventListener('click',()=>document.getElementById('localDraftFileInput').click());
document.getElementById('localDraftFileInput').addEventListener('change',event=>{loadDraftFromComputer(event.target.files&&event.target.files[0]);event.target.value='';});
editor.addEventListener('input',scheduleAutoProcessing);
loadSharedDictionaries();
