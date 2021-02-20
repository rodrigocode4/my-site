import React, { useState, useEffect } from "react"
import { HomeCircle as Home } from "styled-icons/boxicons-solid/HomeCircle"
import { Search } from "styled-icons/fa-solid/Search"
import { UpArrowAlt as UpArrow } from "styled-icons/boxicons-regular/UpArrowAlt"
import { Lightbulb as Light } from "styled-icons/remix-line/Lightbulb"
import { Grid } from "styled-icons/boxicons-solid/Grid"
import { List } from 'styled-icons/fa-solid/List';

import * as S from "./styled"

const MenuBar = () =>  {
  const [ theme, setTheme ] = useState(null)
  const [ display, setDisplay ] = useState(null)
   
  const isDarkMode = theme === 'dark'
  const isListMode = display === 'list'

  useEffect(()=> {
    setTheme(window.__theme)
    setDisplay(window.__display)

    window.__onThemeChange = () => setTheme(window.__theme)
    window.__onDisplayChange = () => setDisplay(window.__display)
  }, [])

  return (
    <S.MenuBarWrapper>
      <S.MenuBarGroup>
        <S.MenuBarLink to="/" title="Voltar pra Home">
          <S.MenuBarItem>
            <Home />
          </S.MenuBarItem>
        </S.MenuBarLink>
        <S.MenuBarLink to="/search/" title="Pesquisar">
          <S.MenuBarItem>
            <Search />
          </S.MenuBarItem>
        </S.MenuBarLink>
      </S.MenuBarGroup>
      <S.MenuBarGroup>
        <S.MenuBarItem 
          className={theme}
          title="Mudar tema" 
          onClick={() => {
            window.__setPreferredTheme(isDarkMode ? 'light' : 'dark')
          }}
        >
          <Light />
        </S.MenuBarItem>
        <S.MenuBarItem 
          className="display"
          title="Mudar visualização"
          onClick={() => {
            window.__setPreferredDisplay(isListMode ? 'grid' : 'list')
          }}
        >
           { isListMode ? <Grid /> : <List />}
        </S.MenuBarItem>
        <S.MenuBarItem title="Ir para o topo">
          <UpArrow />
        </S.MenuBarItem>
      </S.MenuBarGroup>
    </S.MenuBarWrapper>
  )
}

export default MenuBar
