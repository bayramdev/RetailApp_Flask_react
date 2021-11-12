import { CDropdown, CDropdownItem, CDropdownMenu, CDropdownToggle, CHeader, CHeaderNav, CHeaderNavItem, CHeaderNavLink, CImg } from '@coreui/react'
import React from 'react'

const OsTopNav = () => {
  return (
    <>
      <CHeader colorscheme="light">
        <CHeaderNav>
          <CHeaderNavItem>
            <CHeaderNavLink>Home</CHeaderNavLink>
            <CDropdown variant="btn-group">
                <CDropdownToggle className="m-0 pt-0 p-0" caret={false}>
                  <span>Categories</span>
                </CDropdownToggle>
                <CDropdownMenu className="pt-1 dropdown-toggle-menu" placement="bottom-end">
                  <CDropdownItem>Dashboard 1</CDropdownItem>
                </CDropdownMenu>
            </CDropdown>
          </CHeaderNavItem>
        </CHeaderNav>
      </CHeader>
    </>
  )
}

export default OsTopNav