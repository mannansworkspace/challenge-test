import { useMemo } from 'react';
import { userKeys } from '../../constants';
import Collapsible from 'react-collapsible';
import DropDownIcon from '../../assets/Images/Dropdown.svg'


const SectorSelectBox = ({ sectors, user, updateUser }) => {

    // memorizing selectbox
    const sectorOptions = useMemo(() => {
        // generating option list recursively if Sector or SubSector having SubSectors 
        const generateRecursiveOptionList = (sector, depth) => {
            const isUserSelectedSector = user.sectors.some(userSector => userSector._id === sector._id)
            return <div >
                {
                    sector.subSectors?.length ?
                        <Collapsible trigger={<div style={{ display: 'flex', cursor: 'pointer' }}>
                            {
                                Array(depth)?.fill(0).map(() => <></>)}
                            {<div className='SectorInput'>
                                <input className='SectorInputField' onClick={(e) => {
                                    e.stopPropagation()
                                    updateUser(userKeys.SECTORS, sector)
                                }} type='checkbox' id="sectors" name="sectors" checked={isUserSelectedSector} />
                                <div className='sectorButton'>
                                    <p className='sectorButton__text' for="sectors" style={{ width: '100%' }}>{sector.name}</p>
                                    <img height={'15px'} width={'15px'} src={DropDownIcon} alt='DropDownIcon' />
                                </div>
                            </div>}
                        </div>
                        }>
                            {
                                sector.subSectors?.map(((sector) => {
                                    // recursive call
                                    return generateRecursiveOptionList(sector, depth + 1)
                                }))
                            }
                        </Collapsible>
                        :
                        <div className='sectorItems'>
                            <div onClick={() => {
                                // updating user on change
                                updateUser(userKeys.SECTORS, sector)
                            }}
                                style={{ padding: '2px', ...(isUserSelectedSector && { backgroundColor: '#ede9e9', borderRadius: '4px' }) }}
                                value={sector._id} for="sectorsItems">
                                <input type='checkbox' id="sectorsItems" name="sectorsItems"
                                    checked={isUserSelectedSector}
                                />
                                {/* {Array(depth)?.fill(0).map(() => <></>)} */}
                                <span className='sectorItems__name' >{sector.name}</span>
                            </div>
                        </div>
                }
            </div>
        }

        //initiating recursive option list creation for Sectors & subSectors
        return sectors.map(((sector) => {
            return generateRecursiveOptionList(sector, 0)
        }))
    }, [sectors, user])


    return <div className='Sector'>
        <p className='Sector__text'>Sectors ({user?.sectors?.length})</p>
        <p>{sectorOptions}</p>
    </div>
}

export default SectorSelectBox