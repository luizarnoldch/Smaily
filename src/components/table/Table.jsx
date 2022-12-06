import { memo, useEffect, useState } from 'react'
import EditButton from './EditButton'
import DeleteButton from './DeleteButton'
import axios from 'axios'

const BodyCol = memo(({ item }) => {
	return <td>{item}</td>
})

const BodyRow = memo(({ reFetch, items, type }) => {
	return (
		<tr>
			{Object.values(items).map((item, indexCol) => (
				<BodyCol item={item} key={indexCol} />
			))}
			<td className='flex-center gap-4'>
				<EditButton type={type} item={items} reFetch={reFetch} />
				<DeleteButton type={type} item={items} reFetch={reFetch} />
			</td>
		</tr>
	)
})

const TableHead = ({ data }) => {
	return (
		<thead className='border border-b-black'>
			<tr>
				{Object.keys(data[0]).map((item, index) => (
					<th key={index}>{item[0].toUpperCase() + item.substring(1)}</th>
				))}
				<th>Opciones</th>
			</tr>
		</thead>
	)
}

const TableBody = memo(({ data, type, reFetch }) => {
	return (
		<tbody className='text-center'>
			{data.map((items, indexRow) => (
				<BodyRow items={items} key={indexRow} type={type} reFetch={reFetch} />
			))}
		</tbody>
	)
})

const TableFoot = () => {
	return <tfoot></tfoot>
}

const initialData = {
	loading: true,
	data: undefined,
	error: undefined,
}

const Table = ({ type }) => {
	const [fetch, setFetch] = useState(initialData)
	const fetchTable = async () => {
		setFetch(initialData)
		try {
			const url = `http://localhost:4000/${type}`
			const res = await axios.get(url)
			setFetch({...fetch, data: res.data, loading: false})
		} catch (e) {
			setFetch({...fetch, error: e.message})
		}
	}
	useEffect(() => {
		fetchTable()
		return () => {
			setFetch(initialData)
		}
	},[])
	if (fetch.loading){
		return <>Loading..</>
	}
	if (fetch.error){
		return <>Error..</>
	}
	return (
		<table className='container  mt-10 shadow-md rounded-md'>
			<TableHead data={fetch.data} />
			<TableBody data={fetch.data} type={type} reFetch={fetchTable} />
			<TableFoot />
		</table>
	)
}

export default memo(Table)
