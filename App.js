import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

export default class App extends React.Component {

	state = {
		gymName: '',
		buttonTitle: 'Gymnerate'
	}

	names = ['Body', 'Build', 'Force', 'Form', 'Shape', 'Energy', 'Life', 'Sport', 'Fit', 
    'Fitness', 'Tech', 'Gym', 'Smart', 'Total']

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.heading}>Gymnerator!</Text>
				<Text style={styles.subheading}>Your personal gym name generator</Text>
				<Text style={styles.description}>This app has the purpose of generating random gym names</Text>
				<Button onPress={this.gymnerate} title={this.state.buttonTitle} />
				<Text style={styles.result}>{ this.state.gymName }</Text>
			</View>
		)
	}

	gymnerate = () => {
		
		let sortedNamesTotal = 2
		let namesPool = this.names.length
		let result = new Array(sortedNamesTotal)
		let takenNames = new Array(namesPool)

		while (sortedNamesTotal--) {
			let temp = Math.floor(Math.random() * namesPool)
			result[sortedNamesTotal] = this.names[temp in takenNames ? takenNames[temp] : temp]
			takenNames[temp] = --namesPool
		}

		this.setState({gymName: `${result[0]} ${result[1]}`, buttonTitle: 'Re-Gymnerate'})
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	heading: {
		fontSize: 50,
		fontWeight: 'bold',
		paddingBottom: 10
	},
	subheading: {
		fontSize: 25,
		paddingBottom: 20
	},
	description: {
		paddingBottom: 20
	},
	result: {
		paddingTop: 40,
		fontSize: 40
	}
})
